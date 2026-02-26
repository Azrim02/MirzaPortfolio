const e=`---
date: 30-01-26
project: Web Development
tags:
  - SEO
  - SSG
  - DNS
---
# Setting Domain and Improving SEO

Now that my portfolio website is set up, I wouldn't want it to be only accessible by a limited number of people. Hence, I'm going to give it a name and improve its searchability.

## Setting Domain Name
By default, a website will be hosted on a server with a specified IP address (e.g. \`67.67.67.67\`, not a real IP address) of the host, in which whoever wants to visit your website will then have to remember and type it in your browser. Lets be honest, nobody would even bother in making an effort to memorize it. That is why we'll be needing a 'domain name' for the website. 

Instead of remembering numbers, it is much easier for us human to memorize and recall words. Why remember \`10.34.213.87\` (again, not a real IP address) when you can just use \`somethingsomething.com\`? 

As for the website, I've purchased the domain \`mirzashariman.com\` from GoDaddy (RM100+ for 2 years...) because it is such a cool name. Then, I've made a few configurations in order for the domain to work properly. Now, whenever a user keys in \`mirzashariman.com\` in their browser, I've set it so that it redirects to my website, which is hosted on Github Pages. Aannd, the result shows!

![[Pasted image 20260130180112.png]]

Not that big of a revelation... huh. The fact the you're able to visit this with just that cool ahh name means that everything is working as intended.

Now, a new problem arises; my website isn't showing up on google searches. Huh?

## SEO and SSG
Usually, webpages are served as a fully formed HTML file. Search engines can instantly see and crawl through the contents. Renders are done prior on the server-side.

As this website was built in React however, the contents are instead rendered client-side. This meant that the HTML files that are being sent to the search engines are mostly empty. Once the file reached the client, pages are then being rendered appropriately. This presents a problem for these search engines' crawlers, as they cannot see the contents of these webpages. Without these information, search engines cannot really decide on how to recommend your website on to users.

Therefore, we'll need to perform early rendering on the server-side. There are several ways to circumvent this problem:

- Server-side rendering (SSR)
- Static site generation (SSG)
- Hybrid rendering

I've decided to go along with SSG using the \`ViteReactSSG\` package, as it is the easiest to implement among these three options. Some restructuring were needed to be made in the repo, in which I've referred to this great guide [here](https://vite-react-ssg.netlify.app/). After all is done, my website is now crawlable by these search engines! 

Finally, I've registered my domain with Google's Search Engine Console. Maybe in the future, Bing, DuckDuckGo, and others will have this website showcased in its search result, so keep an eye on those platforms too.

![[Pasted image 20260130202322.png]]

Going beyond web development and venturing into optimization for search engines have taught me that there is so much more to learn in the world of computing. Until then, endless learning!`;export{e as default};
