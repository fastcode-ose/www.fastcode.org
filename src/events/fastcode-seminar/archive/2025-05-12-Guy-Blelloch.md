---
sidebar: toc
title: Two general techniques for simple and efficient concurrent data structures
author: Guy Blelloch, Carnegie Mellon University
tagline: Monday, May 12, 2025 4PM EDT
zoomreg: https://mit.zoom.us/meeting/register/d9elcUhCS-eV-xC8Kw6jaA
date: 2025-05-12
eleventyComputed:
  eleventyNavigation:
    parent: Seminar Archive
    key: Guy Blelloch on concurrent algorithms
    order: 98
---

## Abstract

Concurrent data structures are becoming increasingly important with ever growing number of cores.    The design of concurrent data structures, however, often requires a tradeoff between efficiency and simplicity.    In this talk I will cover two general techniques we have developed to bridge this gap: lock-free-locks and big-atomics.    Lock-free locks allow one to run lock-based code so that it is technically lock-free (i.e., no thread can block another and there is a guarantee of system-wide progress).    This can make a data structure significantly more efficient in environments where threads often get interrupted and swapped out (e.g., when there are more user threads than hardware threads) while keeping the simple design of lock-based code.     Big atomics is an approach for efficiently implementing atomic reads, writes and other operations on objects consisting of multiple adjacent words.     Such multiword atomic operations can simplify the design of concurrent algorithms.   Our approach avoids a level of indirection while still supporting lock-free operations, making them efficient and robust.

## Bio

Guy Blelloch is the U.A. and Helen Whitaker University Professor at Carnegie Mellon.  He received a BA from Swarthmore College and a PhD degree from MIT.  His research interests are in algorithms and programming languages and how they interact with an emphasis on parallel computation.  He is an ACM Fellow, and received the IEEE Charles Babbage Award (2018), the inaugural ACM SPAA Parallel Computing Award (2023), and the ACM Paris Kannelakis Theory and Practice Award (2024).