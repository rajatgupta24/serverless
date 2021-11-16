
# URL-Shortner

A basic URL-Shortner running on an [Express Server](https://expressjs.com) with [Mongoose](https://mongoosejs.com) as it's database and [ejs](https://ejs.co) to amalgamate front end and back end of the site.

The URL text field takes in a string and with the help of [shortID](https://www.npmjs.com/package/shortid) module which by default 7-14 url-friendly characters: A-Z, a-z, 0-9, _- . Although alternatively you can use [NanoID](https://github.com/ai/nanoid/) to achieve the same function, this helps in generating a random code of 8 characters which in turn our **URL** into a smaller *URL* which helps in easy sharing without taking too much space when sharing or even remembering it.

The generated *Shortened Url* is stored in the database i.e., mongooseDB. Not only the gernerated URL is stored but it also stores how many times that URL is visited showing in *"clicks"*.

Instead of manually closing the server everytime a change was made, we opted to using nodemon, which helps in implementing the changes in realtime which solves the problem of downtime while doing minor changes in the code.

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Red | ![#ee6352](https://via.placeholder.com/10/ee6352?text=+) #ee6352 |
| Pink | ![#d16e8d](https://via.placeholder.com/10/d16e8d?text=+) #d16e8d |
| White | ![#F7F7FF](https://via.placeholder.com/10/F7F7FF?text=+) #F7F7FF |
| Green | ![#27A527](https://via.placeholder.com/10/27A527?text=+) #27A527 |
| Blue | ![#002240](https://via.placeholder.com/10/002240?text=+) #002240 |
| Yellow | ![#DAA520](https://via.placeholder.com/10/DAA520?text=+) #DAA520 |





## Deployment

To deploy this project run

```bash
  npm init
  npm i express mongoose ejs
  npm i --save-dev nodemon
  npm run devStart
```
Make sure [node.js](https://nodejs.org/en/) as well as [mongoDB](https://docs.mongodb.com/manual/installation/) is installed on your system first.


## Environment Variables

To run this project, the following environment variables will be required

`const express = require('express')`

`const mongoose = require('mongoose')`

`const ShortUrl = require('./models/shortUrl')`



## Demo

https://user-images.githubusercontent.com/75718745/141398750-b4555bff-10c7-4ec0-bdb7-83ebca30d457.mp4
## Development of this project

After [@rajatgupta24](https://github.com/rajatgupta24) proposed this project upon me, I was esctatic hearing this. After that it was upon me to create a team and start developing the project with them.
It was the first time me and my fellow team members were taking upon a backend based web development project. Although all of us had already done countless web development projects but this being the one which also required back end knowledge, we were excited to take upon this project. We had to search some documentation, look into node.js as well as express docs. Ultimately the backend stuff smooth sailed but adding css to the main page on ejs file surprisingly took a bit more time than we initially intended. But we are this happy with the project.


## Optimizations

Although the project is pretty straight forward, there are obviously some things we would like to change.

We want to remove [shortID](https://www.npmjs.com/package/shortid) and use [NanoID](https://github.com/ai/nanoid/), also get a seperate css file instead of putting straight into the main file although there isn't much styling to this. But using [NanoID](https://github.com/ai/nanoid/) is the main priority.

<p align="center">
  <img src="https://user-images.githubusercontent.com/75718745/141401670-de09a4ed-10e7-4d0e-adc1-8a9d824e8105.png" />
</p>

# Team

- [@Kshitij841](https://github.com/Kshitij841)
- [@harshitjha2001](https://github.com/harshitjha2001)
- [@hr8tik](https://github.com/hr8tik)

## Mentor

- [@rajatgupta24](https://github.com/rajatgupta24)

