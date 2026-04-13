---
sidebar: toc
title: Toward energy-optimal AI
author: Mosharaf Chowdhury, University of Michigan
tagline: Wednesday, May 6, 2026 11AM ET
zoomreg: https://mit.zoom.us/meeting/register/zZrJBJflRASG9v-H5y628A
date: 2026-05-06
eleventyComputed:
  eleventyNavigation:
    parent: Fastcode Seminar
    key: Mosharaf Chowdhury
    order: 5
tags:
  seminar
---

## Abstract

Generative AI adoption and its energy consumption are skyrocketing. Training a single frontier model can consume tens of GWh, and inference is rapidly outpacing training in aggregate energy demand. This surge is inflating operational costs, and power delivery is now the gating factor for bringing new GPU capacity online.

In this talk, I will introduce the ML.ENERGY Initiative, our effort to understand and curtail AI's runaway energy demands on three fronts. First, understanding where energy goes: I will present tools to precisely measure AI energy consumption and findings from benchmarking open-weight models across hardware and serving configurations via [the ML.ENERGY Leaderboard](https://ml.energy/leaderboard/). Second, optimizing energy use: I will describe how identifying computations on and off the critical path in distributed training enables precise GPU frequency control, saving energy on non-critical work without slowing down training. Third, exposing tradeoffs: I will present how co-optimizing static and dynamic energy through better kernel scheduling reveals the Pareto frontier between energy and performance, enabling practitioners to make informed deployment decisions under diverse constraints. All tools and systems are open-sourced through the [Zeus](https://github.com/ml-energy/zeus) project. I will conclude with open problems in building energy-optimal AI systems.