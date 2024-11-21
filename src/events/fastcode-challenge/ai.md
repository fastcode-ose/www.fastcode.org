---
layout: layouts/page.njk
sidebar: toc
title: AI Track
#tagline: Tagline.
permalink: /events/fastcode-challenge/llm4pp/
eleventyComputed:
  eleventyNavigation:
    parent: Fastcode Challenge
    key: LLM4PP
    order: 100
---

# **PPoPP Contest on LLM-based Parallel Programming** 

# **(LLM4PP @ PPoPP 2025\)**

**Welcome to the PPoPP Contest on LLM-based Parallel Programming (LLM4PP @ PPoPP 2025)\!**

**Information about the FastCode Workshop @ PPoPP 2025**  
**Time: 10:00 AM \- 11:30 AM**  
**Room: XXX**  
**Location: XXX**  
**Zoom link: XXX**

For decades, programmers could rely on Moore’s Law to speed up their applications, if they simply waited for new and faster hardware. But the end of Moore’s Law put an end to the exponential growth in semiconductor performance, which has put pressure on programmers to understand software performance. Unfortunately, programming modern parallel hardware is notoriously hard for average programmers. Even for experienced performance engineers, parallel programming is time consuming, error-prone, and often requires tedious hand-tuning.

In the meantime, recent advancement in Large Language Models (LLMs) has shown great potential in AI-based software engineering tasks, e.g., code generation and code completion, such as AlphaCode, Starcoder, WizardCoder, Magicoder, Code llama, MetaGPT and DeepSeek-Coder. However, existing AI code models are focused on writing sequential code, while parallel programming (PP) is an arguably more challenging task, as it requires the code to be not only *correct* but also *efficient* on complex parallel computer systems. Unfortunately, the development of LLM for PP is severely hindered by the scarcity of high-quality, publicly accessible parallel code datasets. Specifically, the lack of adequate datasets prevents effective fine-tuning of LLMs, a critical method for equipping them with PP domain knowledge and mitigating their limited exposure to PP-specific data during pretraining. This shortage thus significantly impedes progress in LLM-based parallel code generation.

This contest aims to harness community efforts to **develop an open-source, large-scale, and high-quality dataset for parallel code generation**, igniting an ImageNet-like revolution in LLM-based parallel code generation. To achieve this goal, we encourage participants to gather data samples and develop innovative data cleaning and labeling techniques that can effectively enhance the scale and quality of datasets for parallel code generation.

**The detailed description of the contest problem can be found at [Problem](https://docs.google.com/document/d/1f8fpG1-no19tJraLUOvOLqqC-7jit4CtBplDzGz4S6Q/edit?usp=sharing) page.**

**If there are any questions that are not addressed in the [FAQ](https://SpeedCodeOrg.github.io/LLM4PP/faq.html) page, please feel free to contact us at [llm4pp@groups.mit.edu](https://nvlabs.github.io/LLM4HWDesign/llm4hwdesign@groups.gatech.edu).**

# Tentative Schedule

| ▪ Contest Release Date: | *Nov.18, 2024* |
| :---- | ----: |
| **▪ Registration Deadline:** | ***Dec. 30, 2024*** |
| **▪ Phase I \- Beta Solution:** | ***Nov. 18, 2024 \~ Jan. 15, 2024*** |
| **▪ Phase I Submission Deadline:** | ***11:59:59 PM AoE, Jan. 15, 2024*** |
| **▪ Phase II \- Final Solution:** | ***Jan. 16, 2024 \~ Feb. 01, 2024*** |
| **▪ Phase II Submission Deadline:** | ***11:59:59 PM AoE, Feb. 01, 2024*** |
| **▪ Top Three Teams Notified:** | ***Feb. 15, 2024*** |
| **▪ Winner Announced:** | ***To be announced during PPoPP*** |

# Tentative Awards

| ▪ 1st Place Award: | *US $2000 per team* |
| :---- | ----: |
| **▪ 2nd Place Award:** | ***US $1000 per team*** |
| **▪ 3rd Place Award:** | ***US $500 per team*** |
| **▪ Honorable Mention:** | ***Top three teams in each phase*** |

# Sponsors

IBM, Citadel, NVIDIA, Intel, AMD? … 

# Contest Organizers

* Xuhao Chen, MIT  
* Ryan Deng, MIT  
* Xiaojun Dong, UC Riverside  
* Yan Gu, UC Riverside  
* Bruce Hoppe, MIT  
* Tim Kaler, MIT  
* Youzhe Liu, UC Riverside  
* Roberto Palmieri, Lehigh University  
* Yihan Sun, UC Riverside  
* Lewis Tseng, UMass Lowell  
* Brian Wheatman, University of Chicago

If you have any questions, you can send an email to Yihan Sun ([yihans@cs.ucr.edu](mailto:yihans@cs.ucr.edu))

# To-do List

- [ ] Upload code data format on HuggingFace, like this [one](https://huggingface.co/datasets/GaTech-EIC/MG-Verilog) for [LLM4HWDesign](https://nvlabs.github.io/LLM4HWDesign/problem.html).  
      - [ ] Ask Tim and Brian for the Track-1 problem evaluation   
      - [ ] Update the [LLM4PP-starting-toolkit](https://github.com/SpeedCodeOrg/LLM4PP) repository, similar to [this one](https://github.com/GATECH-EIC/LLM4HWDesign_Starting_Toolkit).  
      - [ ] Do we need a base dataset or not?   
      - [ ] What is the base model? [CodeLlama-7B-Instruct](https://huggingface.co/meta-llama/CodeLlama-7b-Instruct-hf)?   
      - [ ] Figure out how the participants are gonna do their finetuning and testing before they submit their datasets.