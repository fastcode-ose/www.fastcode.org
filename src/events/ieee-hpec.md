---
title: IEEE HPEC 2025
tagline: A special session on task-parallel technology for software performance engineering
author: Bruce Hoppe
event_date: September 2025
#reg_deadline: January 10, 2025
image: /img/HPEC-logo.jpg
eleventyComputed:
  eleventyNavigation:
    key: IEEE HPEC '25
    parent: Events
    order: 3
tags:
  - events
---

{% imgLeft "/img/fastcode-at-hpec.png", "600px" %}

{% alert "primary", "To sign up for this event" %}
Please register for [IEEE HPEC 2025](https://ieee-hpec.org/), a virtual conference occurring September 15-19, 2025.
{% endalert %}


## Abstract

Task-parallel programming (TPP) technology is increasingly adopted by the computing community to accelerate complex scientific problems. TPP offers more efficient handling of irregular patterns (e.g., graph algorithms, recursion) compared to traditional loop-parallel models. This session brings together authors and contributors of several popular TPP platforms to present their technologies, share insights from their design decisions, and demonstrate real-world applications. The session will outline a concise set of guiding principles and diagnostic questions to help attendees evaluate trade-offs among different TPP tools in the context of software performance engineering. By the end of the session, attendees will gain a comparative foundation for selecting the most suitable TPP tool for their parallel workloads.



## Featured speakers

(10-15 minutes per speaker)

* Tsung-Wei Huang (U. Wisconsin): [Taskflow -- a general-purpose task-parallel programming system](./taskflow/)
* Hartmut Kaiser (LSU): [HPX -- a C++ library for parallelism and concurrency](./hpx/)
* I-Ting Angelina Lee (WUSTL): [OpenCilk -- a modular and extensible software infrastructure for fast task-parallel code](./opencilk/)
* Tim Mattson: [Multithreaded parallel Python through OpenMP support in Numba](./openmp/)


{% alert "success" %}
See this [taxonomy](/about/task-parallel-tech/) for a concise table comparing features of notable TPP platforms.
{% endalert %}

## Tell us how you're using TPP technology

Would you like to share about your experience using task-parallel programming technology? We welcome 3-5 minute “lightning talks” from students, software engineers, and others who will talk about how they’ve used TPP technology. To learn more, [contact Bruce Hoppe](mailto:behoppe@mit.edu).
