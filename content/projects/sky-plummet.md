---
date: '2021-04-01T16:04:21-07:00'
draft: false
showInHome: false
title: 'Sky Plummet'
author: Matthew Shiroma
image: /images/projects/skyPlummet/title.png
description: "My third Game Jam where you need to dive bomb for gold as long as possible"
tags:
- Unity
- Game Jam
- Ludum Dare
- Indie Developer
toc: true
---

## Project Duration

*April 23 - 25 2021*

## Overview

Ludum Dare 48's theme was about going deeper. When I heard of this theme, I immediately had a theme in mind about making an infinite scroller game. The main reason for this is that I have not made an infinite scroller in a long time, and I am curious to see how well I can attempt at the genre again.

The end product I got was a 2D falling collect-a-thon game called Blocker Busters, and this was a project that I am especially proud of, with the execution, art direction, and room for growth. The big difference with this participation in Ludum Dare than the first time I partook was I decided to enter in the **hard mode** (Comp) of the game jam.

To summarize said mode:
- One must work solo on the project
- All assets (art, code, music, UI) with a few exceptions must be made by yourself
- The deadline for this is 48 hours as opposed to 72 hours
- The code for the game must be in an open source repository

{{< centered-image src="/images/projects/skyPlummet/gameplay4.gif" alt="Sky Plummer gameplay" caption="Small sample of the core game loop" >}}

## Design Process

I first got the idea from a small inspiration point of playing *Super Smash Brothers Ultimate* as a character named **Toon Link**.

**Toon Link** has a move in the game where one plunges downward, cutting through any opponent in your way. The feel of that attack was what led me to the concept of dive bombing downwards to dig through gold blocks. This concept also opened the door up for some other gameplay elements that did not come into the game due to time constraints.

{{< centered-image src="/images/projects/skyPlummet/design3.png" alt="Sky Plummet design" caption="Initial design of Block Busters, the original name of the game" >}}

Some of these are:
- Random generated block structures to manurer around
- Some blocks allowing the player to bounce off of after dive bombing onto them, allowing for another movement option

Nevertheless, the reduction of scope allowed me to put more time on getting the core gameplay loop finalized, which allowed myself to spend more time on the presentation. I got the core gameplay done in the first day, so the second day was all about making the art, music and UI of the game.

{{< centered-image src="/images/projects/skyPlummet/design1.png" alt="Sky Plummet design" caption="Planning for Block Busters as well as some initial concept art of player" >}}

### Player Character

One particular aspect I would like to address is the player character. The player character was something I wanted to make more fun and whimsical; it would represent the game when you look at it.

I initially wanted to pay homage to my original concept and make a human sword fighter, but I realized that it would make the game less interesting. Then, I immediately thought of the game *Dig Dug* and I began to draw what is the player character for this game, a sentient cartoon drill robot.

{{< centered-image src="/images/projects/skyPlummet/design2.png" alt="Sky Plummet design" caption="Concept art of player character" >}}

One of the main reason besides the cartoon aspect that I went with this character choice is:
- It was made of basic shapes that can be easily changed and colored
- It distinguishes the scope of the world along with easily pointing out what the point of the game is
- It allowed for some fun animation loops (one of which is shown below)

{{< centered-image src="/images/projects/skyPlummet/gameplay5.gif" alt="Player animation" caption="Blended animation loop of the player starting a new round" >}}

I'm really happy with this animation because I wanted to experiment with animation trees and invoking scripts within an animation in Unity. This action solidified my understanding of the game logic that needed to happen in a game, which is a lesson I learned in previous projects, but haven't put into practice as lately.

## Conclusion

{{< centered-image src="/images/projects/skyPlummet/gameplay2.png" alt="Sky Plummet gameplay" caption="Screenshot of second area of game" >}}

My post mortem has more information on what else I enjoyed and what I wanted to improve on, go check it out in the External Links section! I also have links to play this game in itch.io as well as in the browser as well.

{{< centered-image src="/images/projects/skyPlummet/gameplay3.png" alt="Sky Plummet gameplay" caption="Screenshot of third area of game" >}}

## External Links

- [Source Control](https://github.com/maishiroma/LudumDare_48)
- [Itch.io Page](https://kaabiikaze.itch.io/sky-plummet)
- [Ludum Dare Page](https://ldjam.com/events/ludum-dare/48/sky-plummet-my-compo-ludum-dare-48-entry)
- [Post Mortem Entry](https://ldjam.com/events/ludum-dare/48/sky-plummet-my-compo-ludum-dare-48-entry/sky-plummet-post-mortem)