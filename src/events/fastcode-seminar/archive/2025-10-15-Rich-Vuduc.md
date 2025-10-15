---
sidebar: toc
title: When communicating more saves time -- reconsidering the role of computation-communication overlap
author: Rich Vuduc, Georgia Tech
tagline: Wednesday, October 15, 2025 2PM EDT
date: 2025-10-15
eleventyComputed:
  eleventyNavigation:
    parent: Seminar Archive
    key: Rich Vuduc on comp-comm overlap
    order: 94
---

## Abstract
   
When designing algorithms for distributed-memory systems, reducing communication volume is the main proxy for reducing execution time. However, this strategy neglects an important consideration: overlapping computation and communication. Such overlap is often considered a performance-engineering afterthought, something you obviously should do but not something considered especially deep or impactful. To counter this view, I'll summarize two recent performance engineering case studies where overlap—combined with fine-grained asynchronous messaging—saves time, even at the cost of higher communication volume. The case studies come from bioinformatics (k-mer counting) and graph analytics (influence maximization), where algorithmic techniques are designed to match a runtime for asynchronous 1-sided active messaging. I'll conclude with a recent theoretical result for distributed matrix multiplication that further suggests overlap may be more important than we generally think. This talk synthesizes work done jointly with Souvadra Hati, Akihiro Hayashi, Shubhendra Pal Singh, Vivek Sarkar (all at Georgia Tech), Mikhail Isaev (NVIDIA), and Srinivas Eswar (Argonne).

## Recording

https://mit.zoom.us/rec/share/t0jWFx0UK0Si4NrkAR70mynLpSPL_1CCvPqp_yB7B9tA_4XRGfWgCZsh6FuoNXVw.arfJtONU6NacxxLF

## Bio

Richard (Rich) Vuduc is a professor in the School of Computational Science and Engineering at Georgia Tech. His research lab, The HPC Garage, is interested in performance "by any means necessary," whether by algorithms, performance modeling and analysis, ninja programming, or exploiting novel hardware. These pursuits helped produce one ACM Gordon Bell Prize winner and two more finalists and a SIAG/SC Best Paper Prize, among other nods. He also co-directs the Center for Scientific Software Engineering at Georgia Tech, one of four centers worldwide that compose the Schmidt Sciences Virtual Institute for Scientific Software.