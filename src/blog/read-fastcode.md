---
layout: layouts/page.njk
stylesheet: None
background: bg-white
sidebar: toc
title: Read about SPE on the Fastcode blog
eleventyNavigation:
  key: Read about SPE
  parent: Blog
  order: 1
---

{% alert "note", "The Fastcode blog is published on Substack:" %}
[https://fastcode.substack.com](https://fastcode.substack.com)
{% endalert %}

## Recent posts on the Fastcode blog
<a href="https://fastcode.substack.com"><img src="/img/fastcode-substack.png" width="800pt"></img></a>
<ul class="mt-0 pt-0">
{% for article in substack %}
<li><a href="{{ article.link }}">{{ article.title }}</a> by {{ article.creator }}</li>
{% endfor %}
</ul>


## Wanted: your SPE story

Would you like to share your perspective on software performance engineering? [Contact us](/get-involved/share-your-research/), and let Fastcode promote your contributions to SPE.