---
sidebar: toc
title: Scaling Parallel Algorithms to Massive Datasets using Multi-SSD Machines
author: Laxman Dhulipala, UMD and Google
tagline: Wednesday, May 27, 2026 1PM ET
zoomreg: https://mit.zoom.us/meeting/register/Sw7xDXxhTIWcz0-orriawA
date: 2026-05-27
eleventyComputed:
  eleventyNavigation:
    parent: Fastcode Seminar
    key: Laxman Dhulipala
    order: 6
tags:
  seminar
---

## Abstract

It is now possible to build multi-core servers equipped with dozens of
terabytes, to even petabytes of local NVMe SSD storage. This raises a
natural question of what can be done with such machines, and how many
parallel storage devices are required to quickly compute over data
that is much larger than main memory? Can we design algorithms for
such machines that achieve nearly in-memory performance while
gracefully scaling to datasets that are much larger than main memory?

In this talk I will describe some recent results on designing parallel
algorithms for an inexpensive multicore workstation equipped with a
30TB NVMe SSD array composed of 30 SSDs; the entire machine was built
at a total cost of about ten thousand dollars. I will present some
microbenchmarks run on the machine, describe scaling bottlenecks, and
explain how to overcome them by leveraging the modern asynchronous I/O
stack. I will then describe scalable I/O primitives for the multi-SSD
setting that can be used to concisely express several I/O-efficient
parallel algorithms, including samplesort, random shuffle, and basic
sequence primitives.

Our experimental results reveal that there can be very little overhead
to well-designed multi-SSD algorithms relative to their in-memory
counterparts. For example, our multi-SSD samplesort matches the
performance of one of the fastest in-memory sample-sorts for inputs
that fit in memory, and gracefully scales to sorting one trillion
8-byte integers in about an hour while using under two hundred
gigabytes of DRAM. The talk will also cover some ongoing work on
implementing parallel graph algorithms, approximate nearest-neighbor
search data structures, and other irregular algorithms on multi-SSD
machines.

## Bio

Laxman is an Assistant Professor in the Department of Computer Science
at the University of Maryland, College Park, and a research scientist
at Google Research with the Graph Mining team.