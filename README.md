# cartaViniMaker
## Installation
Simply visit the github page. It just works.  
[Live preview](https://andreaiaia.github.io/cartaViniMaker/)
## Usage
My mom needed a simple interface to allow her to make a Carta dei Vini (wines menu) for Mezzamaro restaurant using a word processor.  
You put the infos of the wine in the form and then you press "Render".  
The script saves the forms' value in localStorage, then it rewrites the DOM with those values in p and heading elements already styled for print or "save as PDF".  
Important: disable "front and foot of page" from the options.  
When you visit again the page the script loads localStorage based on the wine's menu you want to edit.

## Why a webpage full of forms
My mom wanted to style every part of a wine's details differently and one day she came to me saying "oh my god this is so boring, it takes ages, can you help me?".
At first I suggested her to write it all first and then style the different parts. I soon discovered it was still a lot of effort. Thus I thought that a template could do it, but there was no easy way to make a similar template in Pages. So I started to think out of the box.

Canva was not an option as I knew she would have had problems to learn how to use it properly.

I needed something she already knew how to use so she wouldn't bother me with more requests for help.  
A solution I thought about was creating a lightweight markup language markdown-like. I still think it would be a more efficient solution as it grants control over the saved files. It would also have been funnier (and maybe easier) to create a script to make a PDF out of a marked text. But my mom never used a markup language so it would have been an inconvenience for her to learn it and use it.

She is not very tech-savy but in her comfort zone she is pretty good with technology. Thus I thought I could make a website with forms for her to fill. The website would auto-save the changes and, when done, all she needs to do is print the webpage she made.

## Improvements
This is not the best way to do this task; the code is not clean and free of repetition.  
But at the moment I don't care as long as it work for my mom: she is the end user of this product.  
Maybe in the future I will improve it. Maybe I will rewrite it in another language to make a binary desktop app. I don't know, for now it just works and my mother is super happy with it. She made the whole menu in an afternoon.  
I worked a week (on evenings) to save her a month.

## Inspiration moment
[This video had 49,530,925 Views when I saw it](https://www.youtube.com/watch?v=BxV14h0kFs0)
