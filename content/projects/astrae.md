---
date: '2017-06-01T14:18:41-07:00'
draft: false
showInHome: false
title: 'Volunteer Gameplay Programmer'
author: Matthew Shiroma
image: /images/projects/astrae/title.png
description: "Led a Laguna College of Arts and Design graduate's thesis project, created entirely in Unity"
tags:
  - Unity
  - Senior Thesis
  - Volunteer
toc: true
---

## Project Duration

*June 2017 - May 2018*

## Overview

I was the Lead Programmer for a Laguna College of Arts and Design graduate’s project. This is a third person, exploratory game where the player must escape from an expansive cave system using tools they find along the way.
- Initially created in Unity 2017, but later moved to Unity 2017 due to new features
- Planning to release a public demo on itch.io
- Showcased demo at IEEE GameSig 2018

### Player Controls

Developing an original player controller, inspired by Tomb Radar 2013, where player movement is relative to camera position.
- Developed a camera controller to compliment the player controller.
    - Camera is free control, meaning it will always be looking at the player
    - Camera automatically adjusts distance to prevent it from clipping into obstacles
    - If camera is too close to player, player will become transparent
    - Can zoom in, out and reset itself to be behind the player at any time.

{{< centered-image src="/images/projects/astrae/gameplay1.png" alt="Astrae gameplay" caption="Screenshot of the parkour system in the game, a central gameplay element." >}}

Designed a parkour system, inspired by Mirror’s Edge.
- Can climb up ledges and shimmy across them
- If there’s a ledge above or below the player, the player will climb up/down them accordingly

Designed an ivy climbing system
- If the player is close to a specific terrain, the player can move up, down and side to side on it, or jump off of it
- Integrated animations with the player, environments, and enemies.

### Terminal System

Created a three terminal system that links UI interaction to the gameplay
- Network: Player can select a gadget that is associated with that terminal and toggle it on/off.
    - This dynamically interacts with objects in the environment, allowing the player to proceed.
- Main Frame: Player can see all of the gadgets and tools that are associated with any given terminal.
- System Files: Player can read the lore of the game, using a system of list buttons.

### Player Tools

Created the Shield Projector, a tool that the player can pick up and use during gameplay.
- This creates a permanent shield that allows the player to use it as a platform or to block an enemy’s attack

### Enemy AI

- Patrol Bots: Wanders around a given area, until it sees the player.
    - If it sees the player, the bot will give chase, shooting at the player and alerting other bots that it is associated with in the area.
    - If the player is far away from the patrol bot after alerting it, it will go back into patrol mode.
- Turrets: Hidden until the player is within its range, then appears and fires at the player until the player is out of its range.

{{< centered-image src="/images/projects/astrae/gameplay2.png" alt="Astrae screenshot" caption="Screenshot of one of the many enemies in the game." >}}

### Misc Contributions

Integrated audio into project using Wwise.

Created Loading Screen.

Assisted with other tasks that lead supervisor had, such as debugging, player health, and play testing.

## Showcase Video

{{< youtube UsKU4cPQtnk >}}

This video was made in prep for IEEE 2018. This video highlights the game mechanics, environments, and player movement.