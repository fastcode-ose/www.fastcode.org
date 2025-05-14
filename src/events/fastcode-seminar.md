---
layout: layouts/seminar-home.njk
title: Fastcode Seminar
tagline: Algorithms, Compilers, Accelerators, and Whatever It Takes
author: Bruce Hoppe
event_date: A monthly series of virtual talks
#reg_deadline: January 10, 2025
image: /img/speed-limit.png
eleventyComputed:
  eleventyNavigation:
    key: Fastcode Seminar
    parent: Events
    order: 1
tags:
  - events
---

{% img "/img/fastcode-banner.png", "600px" %}

## Algorithms, Compilers, Accelerators, and Whatever It Takes

The Fastcode Seminar covers the latest research topics in the theory, practice, and teaching of performance engineering. Topics of interest include, but are not limited to, algorithm design and implementation; techniques for improving parallelism and locality; high-performance programming languages and frameworks; compilers for parallel code; tools for analyzing performance; hardware techniques for improving performance; parallel and concurrent data structures; models and algorithms for emerging technologies; high-performance solutions for databases, operating systems, networking, and artificial intelligence; and just plain clever hacks. 

{% alert "note", "To receive seminar announcements" %}
[Sign up here](/get-involved/join-us/)!
{% endalert %}

## Upcoming Schedule

<div class="container py-3" id="upcoming" style="max-width: 960px;">
  <div class="row g-2">

    {% set postslist = collections.seminar %}
    {% include "seminar-cards.njk" %}

  </div>
</div>

## Previous Seminars

<div class="container">
{% for item in previous_seminars %}
  <div id="{{ item.datetime | slugify }}" class="row py-2 px-2 no-gutters border rounded overflow-hidden flex-md-row mb-2 shadow-sm h-md-250 position-relative" style="background-color: var(--pst-color-surface);">
    <div class="col-2">{{ item.datetime }}</div><div class="col-4">{{ item.speaker }},<br>{{ item.organization }}</div><div class="col-6">{% if item.recording %}<a href='{{ item.recording | url }}'>{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</div>
  </div>
{% endfor %}
</div>

## Organizing Committee

* [Bruce Hoppe](https://fastcode.substack.com/about#§bruce-hoppe) (co-chair)
* [Jakub Łącki](https://research.google/people/105517/?&type=google)
* [Roberto Palmieri](https://www.cse.lehigh.edu/~palmieri/)
* [Christian Schulz](https://schulzchristian.github.io/)
* [Julian Shun](https://people.csail.mit.edu/jshun) (co-chair)
* [Yihan Sun](https://www.cs.ucr.edu/~yihans/)

{% alert "note", "To nominate a speaker for the Fastcode Seminar" %}
[Let us know](https://forms.gle/ED6dAHumrzJddqSTA)!
{% endalert %}
