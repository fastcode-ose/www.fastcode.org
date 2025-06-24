---
layout: layouts/page.njk
sidebar: toc
title: OpenCilk
#tagline: Tagline.
eleventyComputed:
  eleventyNavigation:
    parent: IEEE HPEC '25
    key: OpenCilk
    order: 4
---

## I-Ting Angelina Lee, Washington University in St. Louis

## Abstract

OpenCilk is an open-source software infrastructure for task-parallel programming that allows for substantial code reuse and easy exploration of design choices in language abstraction, compilation strategy, runtime mechanism, and productivity-tool development. The OpenCilk infrastructure consists of three main components: a compiler designed to compile fork-join task-parallel code, an efficient work-stealing runtime scheduler, and a productivity-tool development framework based on compiler instrumentation designed for fork-join parallel  computations. OpenCilk is modular — modifying one component for the most part does not necessitate modifications to the other components — and easy to extend — its construction naturally encourages code reuse. Despite being modular and easy to extend, OpenCilk produces high-performing code.

I will discuss OpenCilk’s modularity, extensibility, and performance through several case studies, including a study
to extend OpenCilk to support multiple runtime systems, including Cilk Plus, OpenMP, and oneTBB. OpenCilk’s design enables rapid prototyping of new compiler back ends to target different parallel-runtime ABIs. Each back end required fewer than 2000 new lines of code. We examined the
OpenCilk runtime’s performance empirically on 15 benchmark Cilk programs and found that it outperforms the other runtimes by a geometric mean of 4%–26% on 1 core and 10%–120% on 48 cores.

## Bio

Dr. Lee is an associate professor in the Computer Science and Engineering department in Washington University in St. Louis. Prior to that, she was a postdoctoral associate in the Supertech research group in MIT CSAIL. She received her S.M. and Ph.D. from MIT, under the supervision of Prof. Charles E. Leiserson. She received her Bachelor of Science in Computer Science from UC San Diego, where she worked on the Simultaneous Multithreading Simulator for DEC Alpha under the supervision of Prof. Dean Tullsen. 