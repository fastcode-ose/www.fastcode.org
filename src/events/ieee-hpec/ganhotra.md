---
layout: layouts/page.njk
sidebar: toc
title: Green Means Stop -- Building the Reward Signal Code Optimization Never Had
#tagline: Tagline.
eleventyComputed:
  eleventyNavigation:
    parent: IEEE HPEC '26
    key: Jatin Ganhotra
    order: 2
---

## Jatin Ganhotra, IBM



## Abstract

Coding agents now fix real bugs in real repositories at a rate that would have sounded absurd three years ago. Ask that same class of agent to make existing code faster, and it does far worse. The usual explanation is that optimization is harder. I think the better explanation is that the reward for correctness was already built. The test suite is a specification, a direction, and a signal to stop, all at once. Performance has none of those. Worse, the agent still has the test suite, so it still gets a green light, and green has always meant stop.

This talk makes that argument and then answers it. Rebuild the missing reward instead of the model: a profile instead of a timer, a scoreboard instead of a checkbox, tests as guardrail rather than goal. The same off-the-shelf agent, with the same model underneath, then gets much closer to expert speedups on two hard optimization benchmarks. I will close with a question for the performance engineering community. What is the performance equivalent of the unit test?

## Bio

Jatin Ganhotra (https://jatinganhotra.dev) is a Senior Software Engineer in the AI for Code group at IBM's Thomas J. Watson Research Center. He leads the development of autonomous software-engineering agents for code generation, issue resolution, and testing. He is the project lead and architect of [iSWE-Agent](https://research.ibm.com/blog/ibm-software-engineering-agent-tops-the-multi-swe-bench-leaderboard-for-java), IBM Research's agent for those tasks. It is top-ranked on the Multi-SWE-Bench and SWE-PolyBench leaderboards for Java and Python. He also created [SWE-Bench-Arena](https://swebencharena.com/), a platform for blind evaluation of AI-generated code on maintainability, readability, and production readiness, beyond whether the tests pass. He joined IBM Research in 2015 after an M.S. in Computer Science from the University of Illinois Urbana-Champaign. He has published at ICML, ICSE, ACL, and EMNLP. His recent BLOG@CACM essay, "[The Code Optimization Flywheel Won't Spin Itself](https://cacm.acm.org/blogcacm/the-code-optimization-flywheel-wont-spin-itself/),"  is the starting point for this talk.