---
layout: layouts/page.njk
sidebar: toc
title: OpenCilk -- a modular and extensible software infrastructure for fast task-parallel code
#tagline: Tagline.
eleventyComputed:
  eleventyNavigation:
    parent: IEEE HPEC '25
    key: OpenCilk
    order: 4
---

## I-Ting Angelina Lee, Washington University in St. Louis

{% alert "primary", "Slides from the talk" %}
* Angelina Lee (WashU) : [OpenCilk -- a modular and extensible software infrastructure for fast task-parallel code](/img/HPEC25-opencilk.pdf)
{% endalert %}

## Abstract

OpenCilk is an open-source software infrastructure for task-parallel programming
that allows for substantial code reuse and easy exploration of design choices in
language abstraction, compilation strategy, runtime mechanism, and
productivity-tool development. The OpenCilk infrastructure consists of three
main components: a compiler designed to compile fork-join task-parallel code, an
efficient work-stealing runtime scheduler, and a productivity-tool development
framework based on compiler instrumentation designed for fork-join parallel
computations. OpenCilk is modular — modifying one component for the most part
does not necessitate modifications to the other components — and easy to extend
— its construction naturally encourages code reuse. Despite being modular and
easy to extend, OpenCilk produces high-performing code.

In this talk, I will discuss OpenCilk’s modularity, extensibility, and
performance by walking through a case study we conducted to allow the compiled
Cilk code to run on OpenCilk runtime, TBB, and OpenMP.  Due to OpenCilk's
modularity and extensibility, we were able to modify the OpenCilk compiler
slightly to target the compiled code to run on different runtime systems.  By
comparing the same code running on different runtime systems, we show that
OpenCilk runtime system almost always matches or exceeds the performance of
other runtime systems.

## Bio
Dr. Lee is an associate professor in the Computer Science and Engineering
department in Washington University in St. Louis.  Prior to that, she was a
postdoctoral associate in the Supertech research group in MIT CSAIL. She
received her S.M. and Ph.D. from MIT, under the supervision of Prof. Charles E.
Leiserson.  Dr. Lee's research focuses on advancing software technologies for 
parallel computing. 