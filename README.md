# Project Team FHIN


# Recipe app - What's Cookin' Puddin'?

<img src="public/images/logo.png" alt="logo image" width="250rem">

It's our 6th week project of [Founders and Coders'](https://www.foundersandcoders.com/) 

Our task this week is to build a web app that authenticates users and stores user-specific data in a PostgreSQL database.


Due to all the error and bugs that were rectified during last week project we decided to save ourselves some pain and countinue with our recipe app from week 5.

[Our week 5 project](https://github.com/fac20/week5-FHIN)


## To run our app

Clone the repo


``` 
npm install
node server.js 
```

Go to localhost3000

Have fun!!! 🥳🥳🥳


## Schema Info

Our database has two tables that are referencing each other on user id.

#### Users

| Column     | Type                                              | Constraints |
| ---------- | ------------------------------------------------- | ----------- |
| id         | SERIAL (translates to integer and AUTO_INCREMENT) | PRIMARY KEY |
| password   | VARCHAR(255)                                      | NOT NULL    |
| email      | VARCHAR(255)                                      | NOT NULL


#### Recipes

| Column       | Type        | Constraints          |
| ------------ | ----------- | -------------------- |
| id           | SERIAL      | PRIMARY KEY          |
| user_id      | INTEGER     | REFERENCES users(id) |
| recipe_name. | TEXT        |                      |
| time         | VARCHAR(255)|                      |
| ingredients  | TEXT        |                      |
| method       | TEXT        |



## Project timeline

A 1.5 day project, with half a day spent on computer bugs :bug: :bug: 


## Tools

- Heroku, not so well apparently 🤪
- npm modules - bcrypt/cookies/jwt.sign 
- Coffee ☕️☕️☕️



## 🦄 The dream team 🦄

🌟 [Lisa](https://github.com/LiCern) - Scrum facilitator

🌟 [Rihards](https://github.com/RihardsJ) - Quality control

🌟 [Jihyun](https://github.com/Jihyun-Janghttps://github.com/Jihyun-Jang) - Deployment

🌟 [Terry](https://github.com/RunGT) - Design

![Dream Team](https://media.giphy.com/media/Q7vMieVa8cK0FgKqlr/giphy.gif)
