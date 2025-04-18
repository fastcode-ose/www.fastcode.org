const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@pborenstein/eleventy-md-syntax-highlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const mathjax3 = require('markdown-it-mathjax3');
const slugify = str =>
str
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');

const featuredPosts = (post) => post.data.featured;
const featuredEvents = (page) => page.data.featuredEvent

module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  // Reuse 11ty's built-in `slugify` filter.
  const slugifyFn = eleventyConfig.getFilter("slugify");

  // Support .yaml extension in _data
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // Copy the sphinx/docs/build/html folder to the output
  eleventyConfig.addPassthroughCopy({
    "./src/sphinx/docs/build/html": "/sphinx-html",
  });

  // Copy Netlify CMS config to the output
  eleventyConfig.addPassthroughCopy({
    "./src/admin/index.html": "./admin/index.html",
    "./src/admin/config.yml": "./admin/config.yml",
  });

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy the favicon materials to the output
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.svg");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/browserconfig.xml");

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight,
    { showLineNumbers: false });
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h1', 'h2'],
    wrapper(content, label) {
      return `<nav id="bd-toc-nav" class="page-toc" aria-label="Site navigation">
    ${content.replaceAll('<ul>', '<ul class="visible nav section-nav flex-column">').replaceAll('<li>', '<li class="toc-h2 nav-item toc-entry">').replaceAll('<a href', '<a class="reference internal nav-link" href')}
    </nav>`
    },
    wrapperClass: 'visible nav section-nav flex-column',
    ul: true
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLL dd, yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  eleventyConfig.addCollection("featuredPosts", (collection) => {
    return collection
        .getFilteredByGlob("./src/posts/*.md") 
        .filter(featuredPosts);
  });

  eleventyConfig.addCollection("featuredEvents", (collection) => {
    return collection
        .getFilteredByGlob("./src/events/*.md") 
        .filter(featuredEvents);
  });

  // for defn things see https://github.com/11ty/eleventy/issues/2565
  eleventyConfig.addCollection("defns", function (collectionApi) {
    const res = [];
    for (const post of collectionApi.getAll()) {
      // see https://github.com/11ty/eleventy/discussions/2153, re: "Tried to use templateContent too early".
      const defs = post.template.frontMatter?.content.trim().matchAll(/{% defn (?<value>.*?) %}/gi);
      for (const { groups } of defs) {
        const [ term, text ] = groups.value.split(",").map(s => s.trim().replace(/"/g, ""));
        res.push({ url: post.url, term, text });
      }
    }
    return res;
  });

  eleventyConfig.addCollection("defnTerms", function (collectionApi) {
    const defns = collectionApi.getFilteredByTag("glossary");
    // Possibly over-engineered here. We might really only care about the slugified title and not the unslugged version.
    const data = defns.reduce((acc, { data }) => {
      return Object.assign(acc, {[slugifyFn(data.title)]: data.title});
    }, {});
    return data;
  });

  eleventyConfig.addCollection('glossary', (collection) => {
    return collection
        .getFilteredByGlob("./src/about/spe-glossary/*.md")
        // Sort content alphabetically by title
        .sort((a, b) => {
          const titleA = a.data.title.toUpperCase()
          const titleB = b.data.title.toUpperCase()
          if (titleA > titleB) return 1
          if (titleA < titleB) return -1
          return 0
        })
  });

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "headerlink",
      symbol: "#",
      level: [1,2,3,4],
    }),
    slugify: eleventyConfig.getFilter("slug")
  }).use(mathjax3);
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addNunjucksFilter("markdownify", (markdownString) =>
  markdownLibrary.render(markdownString)
  );

  // Shortcodes for Bootstrap fire icon
	eleventyConfig.addShortcode(
    "danger",
    function() { return `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" color="var(--tangelo)" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
  </svg> <span style="color:var(--tangelo)">Use responsibly:</span>` }
  );

  // Shortcodes for Bootstrap 5 images
	eleventyConfig.addShortcode(
    "img",
    function(source='', size='400') { return `<img style="display: block; margin-left: auto; margin-right: auto; max-width:${size}; max-height:${size};" src="${source}" class="img-fluid"></img>` }
  );
  eleventyConfig.addShortcode(
    "imgRight",
    function(source='', size='400') { return `<img style="margin: 0.2em 2em 0.2em 4em; max-width:${size}; max-height:${size}" src="${source}" class="img-fluid float-end"></img>` }
  );
  eleventyConfig.addShortcode(
    "imgLeft",
    function(source='', size='400') { return `<img style="margin: 0.2em 4em 0.2em 2em; max-width:${size}; max-height:${size}" src="${source}" class="img-fluid float-start"></img>` }
  );

  // Shortcode for glossary links (see https://github.com/11ty/eleventy/issues/2565#issuecomment-1246106301)
  eleventyConfig.addShortcode(
    "defn",
    function(term='', text='') {
      // Some sneaky stuff here to get the context from the `this.ctx` object so we can access
      // `collections` and `page` variables from within our shortcode.
      const { collections, page } = this.ctx;
      const slug = slugifyFn(term);
      const glossaryUrl = `/about/spe-glossary/#${slug}`;
      // If our `collections.defnTerms` does NOT include the current slug, it's likely a bad link/defn.
      if (!Object.keys(collections.defnTerms).includes(slug)) {
        console.error(`[${page.url}] Unknown term: "${term}" => ${glossaryUrl}`);
        // process.exitCode = 1;
      }
      return `<a class="defn" href="${glossaryUrl}">${text || term}</a>`;
    }
  );

  // Paired Shortcode for pydata-sphinx admonition-notes
	eleventyConfig.addPairedShortcode(
    "alert",
    function(content, type='Note', title='Note:') { return `<div class="admonition ${type.toLowerCase()}"><p class="admonition-title">${title}</p>${markdownLibrary.render(content)}</div>` }
  );

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
