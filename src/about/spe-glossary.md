---
title: SPE Glossary
stylesheet: glossary.css
attribution: true
eleventyNavigation:
  key: SPE Glossary
  parent: About
  order: 3
---

{% for entry in collections.glossary %}

## {{ entry.data.title }} 

{{ entry.templateContent | markdownify | safe }}

{% endfor %}


