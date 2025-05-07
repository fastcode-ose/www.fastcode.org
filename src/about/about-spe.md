---
layout: layouts/page.njk
stylesheet: None
background: bg-white
sidebar: toc
title: About software performance engineering (SPE)
eleventyNavigation:
  key: About SPE
  parent: About
  order: 0
---
{% alert "note", "From the <a href='../spe-glossary/'>SPE Glossary</a>:" %}
{% defn "Software performance engineering", "Software performance engineering (SPE):" %} making software run fast or otherwise consume few resources such as time, storage, energy, network bandwidth, etc.
{% endalert %}

## A field whose time has come (again)

In the mid-20th century, when "computer" took its modern machine-based meaning, software performance engineering was a big deal. For example, the Apollo 11 missions used guidance computers with 4KB of RAM and 32KB hard disks. Getting astronauts to the moon and back under those constraints required serious brilliance from the engineers at NASA.

{% imgLeft "/img/moores-commandment.png", "400px" %} Then, Moore's Law kicked in.

For more than fifty years, software developers enjoyed "free" performance gains, thanks to the chip-makers.

But no more!

Since 2018 or so, developers have had to work for performance gains, which no longer come for free from the chip-makers. Of all the ways to improve application performance -- e.g., hardware architecture, algorithms -- software performance engineering is by far the least inexpensive and most accessible.

## Embracing all of performance engineering

**Parallel programming with OpenCilk:** To cope with the end of Moore's Law, application developers must embrace performance engineering and all its constituent technologies: parallel programming, vectorization, caching, algorithms, compiler optimization, etc. The [OpenCilk](/get-involved/try-opencilk/) task-parallel platform greatly simplifies parallel programming, arguably the most difficult of these technologies and the one with the greatest potential. 

**All of performance engineering with Fastcode:** But without a more general knowledge of performance engineering, programmers cannot effectively exploit the full capabilities of modern multicore computers. Fastcode aims to help researchers to advance our understanding of performance engineering and parallel programming, providing the next generation of researchers and software developers with principled and scientific foundations for obtaining application performance in the post-Moore era.

## Notable elements of SPE

Fastcode is dedicated to all of SPE.

Notable **techniques of SPE** include parallelism, vectorization, caching, algorithms, data structuring, compiler optimization, and more.  

Notable **tools of SPE** include high-resolution timers, performance profilers, memory analyzers, scalability analyzers, race detectors, and more.

The **theoretical foundations of SPE** include task-parallel scheduling, work/span analysis, reuse distance, cache-oblivious algorithms, data structures, and more.

## Motivational reading

* [The future of computing beyond Moore's Law](https://royalsocietypublishing.org/doi/full/10.1098/rsta.2019.0061), *Phil. Trans. of the Royal Soc.*, Jan 2020.
* [There's plenty of room at the top: What will drive computer performance after Moore's Law?](https://www.science.org/doi/10.1126/science.aam9744), *Science*, June 2020.

## Getting started with SPE

Check out [this page of resources](/get-involved/get-started-spe/) to help you learn, do, and teach SPE.