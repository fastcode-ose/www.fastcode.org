---
layout: layouts/page.njk
sidebar: toc
title: The Post-Developer Era
#tagline: Tagline.
eleventyComputed:
  eleventyNavigation:
    parent: IEEE HPEC '26
    key: Tim Kraska
    order: 0
---

## Tim Kraska, MIT

## Abstract

Machine learning (ML) and generative AI (GenAI) are fundamentally changing how software systems are built. What began with ML techniques that automatically optimize individual system components and GenAI tools that assist developers is rapidly evolving toward systems that generate substantial parts of the software stack—or even complete applications—from high-level specifications. This shift points toward a post-developer era in which humans increasingly define intent, requirements, and constraints, while AI generates and maintains the underlying implementation.

In this talk, I will then present two research systems from MIT: **JetStream**, a new approach that uses agentic code generation to synthesize query-specific accelerators as UDFs with update support, achieving 300–800× speedups on TPC-H and nearly 10× over GenDB/Bespoke; and **G5**, which rethinks how we build the next generation of software systems with AI at the core. G5 introduces an AI-first development paradigm in which natural language, structured as a system ontology, becomes the primary source of truth and code is treated as a generated artifact. This shifts development from writing and maintaining code to specifying intent and continuously governing system behavior at a higher level of abstraction.

## Bio

Tim Kraska is a professor of Electrical Engineering and Computer Science (EECS) in MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL), co-director of MIT’s Generative AI Impact Consortium (MGAIC), the Data Systems and AI Lab (DSAIL@CSAIL), and the Everest@CSAIL initiative, and was a co-founder of Instancio, Einblick Analytics (both acquired), and now G5 Labs. His research focuses on using ML/GenAI for data systems. Before joining MIT, Tim was an Assistant Professor at Brown University and spent time at Google Brain. He also served as a Director of Applied Science at Amazon Web Services (AWS). Tim is a 2017 Alfred P. Sloan Research Fellow in computer science and has received several awards, including the VLDB Early Career Research Contribution Award, the Intel Outstanding Researcher Award, the VMware Systems Research Award, the university-wide Early Career Research Achievement Award at Brown University, an NSF CAREER Award, as well as several best paper and demo awards at VLDB, SIGMOD, and ICDE.