---
date: '2025-03-31T21:07:10-07:00'
draft: false
showInHome: false
title: 'OracleMCServer Terraform Module'
author: Matthew Shiroma
image: /images/projects/oracleMCServer/title.jpg
description: "Terraform Module to deploy a simple Minecraft Server using Oracle Cloud's Always Free Tier."
tags:
  - Minecraft
  - Oracle
  - Terraform
toc: true
---

## Project Duration

*May 17 2023 - Aug 29 2023*

## Overview

This project was made in order to help service my friend's *Minecraft* server when we play together. What initially started as a convenance turned into a passion project overnight.

When looking at how to spin up a Minecraft server, cost was a big thing for us, since we don't want to pay an arm and a leg for 3 weeks worth of playtime. That was where I began looking around for cheaper, more secure options. That's where I stumbled across Oracle and their fairly generous cloud offerings.

After doing some research on their instances, I was off to the races to get a basic Minecraft server going. It took some iterations, but I was able to get a server that was reasonably fast, and costed next to nothing to manage. Upon getting to this point, I wanted to automate the original process so that if I ever wanted to make a new server, or just to mess around on my own multiplayer server, I could do it easily.

> Fun fact: There was two iterations of this project! The first one, wasn't even on Oracle; it was on GCP! If you're feeling adventurous, you can see that module [here](https://github.com/maishiroma/MCServerBootstrap)

After some time messing around with the configs, I realized something. I could use what I do at work to get these instances managed! Then, I put two and two together on how I could manage the instance with my DevOps knowledge, the rest became history.

## Features

- Automate spinning up/down the environment via Terraform
- No other external tool needed (used TF to manage, bash to run scripts, and systemd to run minecraft service)
- Can easily set up whitelists for server
- Mod support via Forge
- And more!

## External Links

- [Source Control](https://github.com/maishiroma/OracleMCServer)