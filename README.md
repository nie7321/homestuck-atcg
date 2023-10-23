# Homestuck ATCG Web
This is a proof-of-concept responsive website documenting the rules and cards for the Homestuck: Atypical Card Game. The proof-of-concept site is available here:

- https://atcg.godless-internets.org

## Usage
There are two types of [pages](./src/pages): 

- `.astro` files, which are for writing HTML + Javascript. These are used for the, uh, artisan-crafted websights.
- `.md` files, which you can write in Markdown and most of the HTML is handled for you. This is ideal for the rules, where you wanna focus on content and don't need a ton of Pretty Websights.

When writing `.md` files, the headers (`## This is a Second-Level header`) can be turned into a table of contents. Just insert a `## Table of Contents` header and it'll generate it for you.

### Updating the Card Database
I took a gander at [the nandeck Excel spreadsheet](https://discord.com/channels/1097910841770262600/1097911414548594698/1134311635855605790) and saved the first tab as a CSV. When the site is deployed, it generates a `<table>` from that. So as you add cards, it SHOULD be as easy as updating [the CSV file][./src/cards/cards.csv]?

I'm not sure if you have an easy way to export them all as one CSV in NanDeck. The set & card number isn't in there right now (and I think a few more stats?). 

It also needs a way to get the card images. Not sure what/how NanDeck exports those. But if we can get the card number in the CSV and the images are named after the card numbers, they could be tied together. Which means it could be very easy to update :eyes:

### Site Layout, Etc
The layouts are kept in `src/layouts`. The `Chrome.astro` file is the "chrome" of the site: the nav bar and some other miscellany. 

The `SiteLayout` is for use with `.astro` files. The `MarkdownLayout` is for use with `.md` files. Both use the `Chrome.astro` layout, but they handle the content area sliiiightly differently.

There are art assets in `src/images`.

A small amount of CSS can be found in `src/styles`. But the site mostly uses Tailwind, which isn't written like traditional CSS because developers have to make everything difficult and painful.

### Deployment
Changes made on GitHub will be automatically deployed by an [Action](https://github.com/nie7321/homestuck-atcg/actions). The action runs Astro's process to turn all the files into some HTML/CSS/JS files and send them to a webserver.

Right now, the site is deploying to my account's GitHub Pages. But [the prepared HTML files](https://github.com/nie7321/homestuck-atcg/tree/gh-pages) can be delivered anywhere.

## Tech
This is build with the following components:

- [Astro](https://astro.build/), a framework for building static sites
- [TailwindCSS](https://tailwindcss.com/), a CSS framework
- [Alpine.js](https://alpinejs.dev/), a lite Javascript framework
- [simple-datatables](https://github.com/fiduswriter/simple-datatables/tree/main), which is like DataTables.net (but no jQuery needed)
- [GitHub](https://github.com), which stores the source code and runs the Astro builds to turn this into a heap of HTML
- *Something*, where it's hosted 
  - idk if you want to stick with neocities, put it on your own server, or what.
  - It's Just HTML(tm), so it can live anywhere.

### Local Development
If you have node/yarn installed already:

```sh
yarn install
yarn run dev
```

The site should start on `http://localhost:4321` or something. It will tell you the correct URL. Changes should be reflected in the browser immediately.

## Credits
- Discord logo vector by [Gil Barbara](https://github.com/gilbarbara/logos). Used under the CC0 license.