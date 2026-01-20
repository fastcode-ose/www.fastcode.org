---
sidebar: toc
title: Highway to Performance -- Portable C++ SIMD
author: Jan Wassenberg, Google
tagline: Thursday, Feb 5, 2026 12PM ET
zoomreg: https://mit.zoom.us/meeting/register/oRdRZlMtRQ-gAoFOVQC6fw
date: 2026-02-05
eleventyComputed:
  eleventyNavigation:
    parent: Fastcode Seminar
    key: Jan Wassenberg
    order: 2
tags:
  seminar
---


## Abstract

Modern CPUs offer significant speedups through Single Instruction, Multiple Data (SIMD), but accessing this performance often implies a difficult choice: rely on unpredictable compiler auto-vectorization, or hand-write intrinsics for each CPU.

Based on a series of workshops for Google engineers, this talk introduces a better alternative: [Highway](https://github.com/google/highway). This open-source C++ library allows you to write SIMD code once and efficiently target Arm, LoongArch, POWER, RISC-V, WASM, x86, and IBM Z.

We will cover the fundamentals of vectorization and discuss real-world use cases, including LLM inference ([gemma.cpp](https://github.com/google/gemma.cpp)) and image processing. The session provides a practical guide on porting standard C++ loops to portable and type-safe vector code. Going deeper, we demonstrate how to handle loop remainders and variable-length vectors, and how to implement runtime dispatch for selecting the best available instructions.
This enables you to unlock hardware performance while keeping your codebase maintainable.

## Bio

Jan Wassenberg is a Senior Staff Software Engineer at Google DeepMind in Zürich, where he develops infrastructure for high-performance software.
With a PhD in efficient algorithms and over 20 years of focus on SIMD, Jan bridges the gap between raw hardware capabilities and software usability.

He is the main author of Highway, the open-source C++ library that helps numerous projects efficiently target six CPU families with much less toil. Its users include Chromium, NumPy, ScaNN, TensorFlow, and V8.

Jan is currently tech lead of gemma.cpp (open-source LLM inference). His previous work includes optimizing the JPEG XL image codec (also co-chairing its standardization), devising the fastest known vectorized quicksort (vqsort), and designing Randen, Google’s default secure random number generator..