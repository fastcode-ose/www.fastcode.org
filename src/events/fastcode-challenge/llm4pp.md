---
layout: layouts/page.njk
sidebar: toc
title: Large Language Model for Parallel Programming (LLM4PP) at FCPC25
#tagline: Tagline.
#permalink: /events/fastcode-challenge/llm4pp/
eleventyComputed:
  eleventyNavigation:
    parent: Fastcode Challenge
    key: Track 2 (LLM4PP)
    order: 2
---

Please fill out the signup form [here](https://docs.google.com/forms/d/1PkDMD6WdLzZcWlwzIrPJ68bfcDYlQ93nOfQhFUL7NTM). We will be releasing [the starting toolkit](https://github.com/SpeedCodeOrg/LLM4PP/) soon.

## Introduction

For decades, programmers could rely on Moore’s Law to speed up their applications, if they simply waited for new and faster hardware. But the end of Moore’s Law put an end to the exponential growth in semiconductor performance, which has put pressure on programmers to understand software performance. Unfortunately, programming modern parallel hardware is notoriously hard for average programmers. Even for experienced performance engineers, parallel programming is time consuming, error-prone, and often requires tedious hand-tuning.

In the meantime, recent advancement in Large Language Models (LLMs) has shown great potential in AI-based software engineering tasks, e.g., code generation and code completion, such as AlphaCode, Starcoder, WizardCoder, Magicoder, CodeLlama, MetaGPT and DeepSeek-Coder. However, existing AI code models are focused on writing sequential code, while parallel programming is an arguably more challenging task, as it requires the code to be not only correct but also efficient on complex parallel computer systems. 

This contest aims to harness community efforts to shape the ways on how to leverage LLMs for parallel programming. To achieve this goal, we ask participants to teach and utilize LLMs to solve parallel programming problems. Given a set of programming problems, the participants are encouraged to explore prompting and fine-tuning techniques to enhance existing code models, e.g., CodeLlama, to solve the problems. The solutions will be evaluated based on their correctness and running time performance. If you have any questions, please feel free to contact us at [fastcode.programming.challenge@gmail.com](mailto:fastcode.programming.challenge@gmail.com).

## Problems

### Problem I: Dollar-constrained Workflow Design

The participants are asked to develop a prompting workflow using LLM APIs, such as [OpenAI API](https://platform.openai.com/docs/overview), to teach LLMs to solve parallel programming problems. Each participant will need to submit a workflow script, which will be evaluated by running inference on solving a set of parallel programming problems from our in-house benchmarks. We suggest participants test their solutions on the [ParEval benchmark suite](https://github.com/parallelcodefoundry/ParEval) before submission. We will include sample inference/evaluation scripts in [the starting toolkit](https://github.com/SpeedCodeOrg/LLM4PP/). **To make the comparison fair, the cost from API usage incurred by the inference/evaluation script will be constrained to a specific amount e.g., 5 dollars and this will be determined at a later date.** 

### Problem II: Memory-constrained Model Fine-tuning

The participants are asked to optimize parallel programming problems by teaching (e.g., prompting and/or fine-tuning) and utilizing open-source models, such as CodeLlama or Deepseek Coder. The model will be evaluated by running inference to solve a set of parallel programming problems from our in-house benchmarks. Participants can use the [ParEval benchmark suite](https://github.com/parallelcodefoundry/ParEval) for their own testing and evaluation before submission. A suggested strategy is to finetune an open-source LLM on a dataset that the participants collect or generate. We will include a sample fine-tuning script, a suggested data example format, as well as sample inference/evaluation scripts in [the starting toolkit](https://github.com/SpeedCodeOrg/LLM4PP/). **To make the comparison fair, the inference/evaluation will be constrained to a specific GPU memory budget, e.g., 24GB, and this will be determined at a later date.**

## News
- **\[12/01\]** The starting toolkit for Problem II is incoming
- **\[11/25\]** The starting toolkit for Problem I is incoming
- **\[11/22\]** Our website is online!

## Rules & Scoring

We will release the detailed rules with our [starting toolkit](https://github.com/SpeedCodeOrg/LLM4PP/) and please stay tuned! Meanwhile, please fill out the signup form [here](https://docs.google.com/forms/d/1PkDMD6WdLzZcWlwzIrPJ68bfcDYlQ93nOfQhFUL7NTM), which will help us better understand participants’ needs. Note that participants are encouraged, but not necessarily, to solve both problems. We have prizes for each of the problems, and also for the best overall performance in both problems. 

## Tentative Awards

- Best Workflow Award: US $200 
- Best Model Award: US $300
- Best Overall Solution Award: US $500 
- Honorable Mention: Top three teams in each problem

## Tentative Schedule

| Contest Start Date: | Nov.22, 2024 |
| :---- | ----: |
| Problem I Release Date: | Nov. 25, 2024 |
| Problem II Release Date | Dec. 01, 2024 |
| Solution Submission Deadline | Jan. 24, 2025 |
| Results Notification | Feb. 05, 2025 |
| Winners Announced | To be announced during PPoPP |
