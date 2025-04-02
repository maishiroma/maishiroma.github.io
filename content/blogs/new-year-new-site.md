---
date: '2025-04-01T21:27:49-07:00'
draft: false
title: 'New Year, New Site'
author: Matthew Shiroma
image: /images/blogs/2025/newYearNewSite/title.jpg
description: "Blog describing the next iteration of my portfolio site"
tags:
  - Cleanup
  - Website
  - Golang
  - GitHub Actions
toc: false
---

Why hello once again! You really thought I wouldn't come back around to fix this site up again? Well, you were half right, I was pretty content with the latest changes I made since last time. However, (and weirdly poetic) after doing some more rounds of networking and talking to folks, I once again, realized that my portfolio site is *lack of a better word* needs to be **revamped**.

There wasn't anything bad about the previous iteration, to start us off on a good note. In fact, I was actually pretty surprised I was able to keep it up for that long, especially since the site was using very minimal JS and HTML to run. But, after looking at it again, I realized that there were a LOT of things that were missing that I would much like to have on a portfolio site. Things like:
- Selectable Text
- Links to specific projects
- Ease of adding new content
- A more crisp feel as opposed to using a fairly old template (Dark Joe, you were the GOAT, but it was time for me to find a new one)
- An excuse to clean up the old site from old content and add some new things to it

So after doing some assessments, I was off to the races! It took me a while to get the gears going again, but after looking up some popular site frameworks, I remembered that I once used a small tool named *hugo* in an earlier website build back when I was at Nebulaworks (to make you feel old, that was about 3 years ago as of this writing!). I was a big fan of it, especially since it had very little dependencies and only required knowing *markdown*, which has been my absolute choice of writing as of lately.

{{< centered-image src="/images/blogs/2025/newYearNewSite/joplinLogo.png" alt="Joplin Logo" caption="Shoutout to Joplin for carrying my notes these past five years" >}}

So after tinkering around with getting *hugo* installed, I was ready to begin the transition over. It took a few days to get all of the content over, but after all of that was done, I finally have the following hierarchy:

{{< centered-image src="/images/blogs/2025/newYearNewSite/newHierarchy.png" alt="Joplin Logo" caption="The most important parts are the content, static and layouts folder. Which is much EASIER to manage." >}}

As the subtitle eluded, this is so much cleaner to me! No longer do I have to remember where content is stored or how things work. *hugo* does all of the heavy lifting, and the theme that I picked, (which you can get [here](https://github.com/gurusabarish/hugo-profile)), streamlined showing all of the content that I ever wanted.

The main page is now crisp, with showing myself as the first thing you see (a bit egotistical, but I think all portfolios have to be that way, eh?), and there is a nice clear direction of what content is displayed, blog posts, contact information, and so forth. Heck, even writing this is SO MUCH nicer now than before! I had to write in HTML and convert my sentences to be in that format. Now, it's as if I'm writing in my **joplin** notes, which I pretty much do all the time anyway.

{{< centered-image src="/images/blogs/2025/newYearNewSite/newContent.png" alt="Joplin Logo" caption="Even when writing blogs like this, it's so much clearer how to set it up." >}}

Once I got the main format of the site down, I toyed with the colors and made a new logo (which could prob use some more work admittedly) and set up a new GitHub Action to auto deploy my site whenever it goes up to `master`. And that's it! The site is up and running; even the cache purge of it was outstandingly **fast**, I was blown away!

I'm actually genuinely impressed how night and day the site has become. Maybe this will be the time where I actually post on here more often, since it's now something I can do with my eyes closed. Well either way, that was the main update I wanted to share with this blog post!

As for other things? Well, a lot has happened in 4 years hahaha, so I can't describe them all here (at least take me out to dinner first)! But I will say this! I'm still on the DevOps route and currently working in Animation! Which is pretty cool. Stil making games in my own time, but nothing new has came from it. I did dabble into digital art! I may even show some of it here if I am feeling lucky.

Ok, well, I can't stay up all night doing this site refactor, I want to get this going so that I can move on to other things! This may be the last time you see me here, but it won't be the first time that I said that haha! Welcome back, site! And it feels great to give you a new coat of paint again (even if said coat of paint I gave back then was pretty cool).