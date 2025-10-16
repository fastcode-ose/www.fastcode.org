---
title: Fastcode @ HPEC 2025
tagline: A special session on task-parallel technology for software performance engineering
author: Bruce Hoppe
event_date: Speakers' slides now available
#reg_deadline: January 10, 2025
image: /img/HPEC-logo.jpg
eleventyComputed:
  eleventyNavigation:
    key: IEEE HPEC '25
    parent: Events
    order: 6
---

{% imgLeft "/img/fastcode-at-hpec.png", "600px" %}

{% alert "primary", "Slides from our session" %}
* Bruce Hoppe (Fastcode): [Fastcode -- an open-source community for making software performance engineering easy and fun](/img/HPEC25-Fastcode.pdf)
* TW Huang (U. Wisconsin): [Taskflow -- a general-purpose task-parallel programming system](/img/HPEC25-taskflow.pdf)
* Angelina Lee (WashU) : [OpenCilk -- a modular and extensible software infrastructure for fast task-parallel code](/img/HPEC25-opencilk.pdf)
* Tim Mattson (Merly.ai): [Multithreaded parallel Python through OpenMP support in Numba](/img/HPEC25_Tasking_and_PyOMP.pdf)
{% endalert %}


## Abstract

Task-parallel programming (TPP) technology is increasingly adopted by the computing community to accelerate complex scientific problems. TPP offers more efficient handling of irregular patterns (e.g., graph algorithms, recursion) compared to traditional loop-parallel models. This session brings together authors and contributors of several popular TPP platforms to present their technologies, share insights from their design decisions, and demonstrate real-world applications. The session will outline a concise set of guiding principles and diagnostic questions to help attendees evaluate trade-offs among different TPP tools in the context of software performance engineering. By the end of the session, attendees will gain a comparative foundation for selecting the most suitable TPP tool for their parallel workloads.



## Featured speakers

(15 minutes per speaker)

* Bruce Hoppe: [Fastcode -- an open-source community for making software performance engineering easy and fun](/img/HPEC25-Fastcode.pdf).
* Tsung-Wei Huang (U. Wisconsin): [Taskflow -- a general-purpose task-parallel programming system](./taskflow/)
* I-Ting Angelina Lee (WashU): [OpenCilk -- a modular and extensible software infrastructure for fast task-parallel code](./opencilk/)
* Tim Mattson (Merly.ai): [Multithreaded parallel Python through OpenMP support in Numba](./openmp/)


{% alert "success" %}
See this [taxonomy](/about/task-parallel-tech/) for a concise table comparing features of notable TPP platforms.
{% endalert %}

## Group discussion

The session will include 30 minutes for attendees to ask questions for the panelists to discuss. We want to hear from you! If you are considering attending, please [contact Bruce Hoppe](mailto:behoppe@mit.edu) and let us know what you're interested in discussing.

Possible questions we might discuss include
* What are the key use cases (and other factors) I should keep in mind to help me choose a good platform for my software performance engineering?
* I am starting my PhD in software performance engineering, and I want to help people use computational environments efficiently. Where should I direct my research?
* My software company is reorganizing to prioritize performance engineering of our products. What principles should we keep in mind so that we actually make it simpler for our employees to do software performance engineering?
* How important is it to support abstractions that work across languages?   Specifically, if your system only works for C++, what do you say to Python programmers?
* An offshoot of the AI obsession and restructuring of the computer industry in the post-x86 era means vendor funding to support programming systems is greatly reduced.  Since engineering is a zero-sum game, what do we actually accomplish by pushing “different platforms for different use cases”?
* Are there commercial software products (not just research projects) that use tasking systems?  In other words, with our work on tasking, are we having an impact that reaches the general public?  Or are we just supporting some really nice academic research?

{% alert "success" %}
Thanks to the HPEC organizers and all who attended our special session!
{% endalert %}