---
layout: layouts/page.njk
stylesheet: None
background: bg-white
sidebar: toc
title: Read about software performance engineering (SPE)
eleventyNavigation:
  key: Read about SPE
  parent: News
  order: 1
---

<div>The Fastcode newsletter and blog are for</div>
<ul class="mt-0 pt-0">
<li>promoting activities in the SPE community, and</li>
<li>sharing ways to make SPE easier and more fun for the average programmer.</li>
</ul>

## Fastcode newsletter

{% alert "note", "Subscribe to the Fastcode newsletter:" %}
Click [here](/get-involved/join-us/) to subscribe.
{% endalert %}

### Recent issues

<ul class="mt-0 pt-0">
{% for issue in newsletter %}
<li><a href="{{ issue.url }}">{{ issue.subject }}</a> <i class="font-weight-light">({{ issue.date }})</i></li>
{% endfor %}
</ul>


## Fastcode blog

{% alert "note", "The Fastcode blog is published on Substack:" %}
[https://fastcode.substack.com](https://fastcode.substack.com)
{% endalert %}

### Recent posts

<a href="https://fastcode.substack.com"><img src="/img/fastcode-substack.png" width="800pt"></img></a>
<ul class="mt-0 pt-0">
{% for article in substack %}
<li><a href="{{ article.link }}">{{ article.title }}</a> <i class="font-weight-light">by {{ article.creator }}</i></li>
{% endfor %}
</ul>


## Wanted: your SPE story

Would you like to share your perspective on software performance engineering? [Contact us](/get-involved/share-your-story/), and let Fastcode promote your contributions to SPE.