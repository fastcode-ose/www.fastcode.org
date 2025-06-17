---
sidebar: toc
title: A renewed focus on the *structure* of concurrent data structures
author: Mike Spear, Lehigh University
tagline: Monday, June 16, 2025 4PM EDT
date: 2025-06-16
eleventyComputed:
  eleventyNavigation:
    parent: Seminar Archive
    key: Mike Spear on structure for concurrency
    order: 97
---

## Abstract

It is common for concurrent data structure designers to treat the limitations
of their chosen synchronization mechanism as the most important design
characteristic.  This can overly constrain programmers, especially if too
much emphasis is placed on employing a single linearizing compare-and-swap.

In this talk, I will discuss recent innovations in synchronization, and then
argue that they enable programmers to place their focus back where it
belongs: on the *structure* of concurrent data structures.  I will describe
[exoTM](https://ieeexplore.ieee.org/document/10364574), one (of many!) recent synchronization frameworks that blurs the line
between transactional memory and multi-word compare-and-swap (MCAS).  ExoTM
lets programmers think of synchronization in terms of coarse-grained
transactions, while retaining the ability for low-level optimization.
I will then describe the [Skip Hash](https://arxiv.org/html/2410.07466v1), a shockingly simple and easy-to-verify
concurrent ordered map that uses exoTM's composability and novel atomicity
features to reduce many operations' complexity to O(1).

## Recording

https://mit.zoom.us/rec/share/BqpJetp94Wa_9IpDcvtn0ks_jHYTnFwcVtEGkpBzYUch7MU2zNvZPDVm1HwO1zSr.6xx59Jgtlr-T5soC


## Bio

Michael Spear is an associate professor in the Computer Science and
Engineering Department at Lehigh University.  He received a BS from the
United States Military Academy and a PhD from the University of Rochester.
His research focuses on issues related to scalability and programmability
for shared and distributed memory systems.
