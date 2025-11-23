---
title: SPE Bibliography
layout: layouts/page.njk
sidebar: toc
tagline: Bib tagline
eleventyNavigation:
  key: SPE Bibliography
  parent: About
  order: 4
---

If you're looking for books and articles to help you get started with SPE, see [this page](../get-started-spe/#learning-more-about-spe).

This page demonstrates the possibility of presenting lists of SPE books and SPE articles. We can add more fields and formatting. Anything is possible!

The lists are editable in the website source folder at `src/_data/books.yaml` and `src/_data/articles.yaml`.

## Books

<ul>

{% for item in books | sort(false, true, 'year') %}

<li><a href="{{ item.url }}"><i>{{ item.title }}</i></a>, by {{ item.author }}. {{ item.publisher }}, {{ item.year }}.</li>

{% endfor %}
</ul>

## Articles

<ul>

{% for item in articles | sort(false, true, 'year') %}

<li><a href="{{ item.url }}">{{ item.title }}</a>, by {{ item.author }}. In <i>{{ item.journal }}</i> {{ item.volume }} {{ item.number }} ({{ item.year }}), {{ item.pages }}. </li>

{% endfor %}
</ul>

{% alert "note" %}
If you have any questions, comments, or suggested additions, please [let us know](/get-involved/contact/).
{% endalert %}