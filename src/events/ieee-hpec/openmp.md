---
layout: layouts/page.njk
sidebar: toc
title: Multithreaded parallel Python through OpenMP support in Numba
#tagline: Tagline.
eleventyComputed:
  eleventyNavigation:
    parent: IEEE HPEC '25
    key: Python/OpenMP
    order: 4
---

## Tim Mattson

## Abstract

A modern CPU delivers performance through parallelism. A program
that exploits the performance available from a CPU must run in parallel on
multiple cores. This is usually best done through multithreading. Threads belong
to a process and share the memory associated with that process. The most
popular approach for writing multithreaded code is to use directives to tell the
compiler how to convert code into multithreaded code. The most commonly
used directive-based API for writing multithreaded code is OpenMP. Python is
not designed for parallel programming with threads. The GlobalInterpreterLock
(GIL) prevents multiple threads from simultaneously accessing Python objects.
This effectively prevents data races and makes Python naturally thread safe.
Consequently, the GIL prevents parallel programming with multiple threads and
therefore keeps Python from accessing the full performance from a CPU. In this
talk, I describe a solution to this problem. We implement OpenMP in Python
so programmers can easily annotate their code and then let the Numba just-
in-time (JIT) compiler generate multithreaded, OpenMP code in LLVM, thereby
bypassing the GIL. We describe this new multithreading system for Python and
and show that the performance in our early tests is on par with the analogous C
code.

## Bio

Tim Mattson is a parallel programmer obsessed with every variety of science (Ph.D. Chemistry, UCSC, 1985).  In 2023 he retired after a 45-year career in HPC (30 of which were with Intel). During his long career he has had the privilege of working with smart people on great projects including: (1) the first TFLOP computer (ASCI Red), (2) Parallel programming languages … Linda, Strand, MPI, OpenMP, OpenCL, OCR and PyOMP (3) two different research processors (Intel’s TFLOP chip and the 48 core SCC),  (4) Data management systems (Polystore systems and the TileDB Array-based storage engine), (5) the GraphBLAS API for expressing graph algorithms as sparse linear algebra.   Tim has over 150 publications including six books on different aspects of parallel computing. 