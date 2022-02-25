# FINAL PROJECT 📷

<p align="center">
	<img src="packages/api/public/1794.jpg" alt="logo" width="150"/>
</p>

##  <a name='Tableofcontents'></a>Table of contents

<!-- vscode-markdown-toc -->
 1. [ Introduction](#Introduction)
 2. [ Motivation](#Motivation)
 3. [ Structure](#Structure)
 4. [ Packages and dependencies](#Packagesanddependencies)
 5. [ Documentation](#Documentation)
 6. [ Acknowledgements](#Acknowledgements)
 7. [ License](#License)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='Introduction'></a> Introduction

This is my final project for [CORE Code School](https://www.corecode.school/).

Everyone knows the famous photographer [John Doe](https://en.wikipedia.org/wiki/John_Doe), so here it is his [website](https://i.gifer.com/1kpe.mp4). There you will be able to find some information about him, his work, reviews from other customers, prices and even make an appointment to discuss anything you need with John Doe.

##  2. <a name='Motivation'></a> Motivation

My sister is a photographer. When I started this bootcamp, she used to joke about I would do a website for her work as soon as I could. So I took it seriously, but first I wanted to do a beta version. If this works properly, I could have free photos for the rest of my life, so I'm all in 😼

##  3. <a name='Structure'></a> Structure

This is just a regular photograper website, where the customer can find information about the studio and the photographer, some pictures of photographer's previous works, leave a review, see reviews from others customers, select a pack of photos or create their own pack and make an appointment.

### 3.1. Repository

The project is a monorepo and its structure is:

```
final-project
    │
    |   packages/
    |    ├── api/
    │    |    ├── public/
    │    |    ├── src/
    │    |    ├── routers/
    │    |    ├── scripts/
    │    |    ├── app.ts
    │    |    ├── config.ts
    │    |    ├── server.ts
    │    |    └── package.json
    |    |
    |    └── front/
    |         ├── pages/
    |         └── package.json
    │
    ├── .eslintrc.json
    ├── .gitignore
    ├── lerna.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

### 3.2. API

* Models:

    ```ts
    Appointment: {
        user: String,
        email: String,
        date: Date,
        photoPack: Array<Object>,
    };

    Photos: {
        name: String,
        images: Array<String>,
    };

    Prices: {
        packName: String,
        quantity: Number,
        price: Number,
        pricePerPhoto: Number,
        size: String,
        printed: Boolean,
    };

    Reviews: {
        userName: String,
        email: String,
        profilePic: String,
        comment: String,
        rate: Number,
    };
    ```


* CRUDs:
    - Appointment:

        | Method | Route            | Description                     |
        |--------|------------------|---------------------------------|
        | GET    | /appointment     | Availability for an appointment |
        | GET    | /appointment/:id | Details of the appointment      |
        | POST   | /appointment/    | Make an appointment             |
        | POST   | /appointment/:id | Update the appointment          |
        | DELETE | /appointment/:id | Delete the appointment          |

    - Prices:

        | Method | Route       | Description                      |
        |--------|-------------|----------------------------------|
        | GET    | /prices     | List of prices                   |
        | GET    | /prices/:id | Details of a price               |
        | POST   | /prices     | Create a pack of photos          |
        | POST   | /prices/:id | Update selection                 |
        | DELETE | /prices/:id | Delete a selected pack of photos |

    - Reviews:

        | Method | Route        | Description         |
        |--------|--------------|---------------------|
        | GET    | /reviews     | Customers reviews   |
        | GET    | /reviews/:id | Details of a review |
        | POST   | /reviews/    | Leave a review      |
        | POST   | /reviews/:id | Update a review     |
        | DELETE | /reviews/:id | Delete a review     |

##  4. <a name='Packagesanddependencies'></a> Packages and dependencies

    | Front      | Api          | All           |
    | ---------- | -------------| --------------|
    | next.js    | auth0        | axios         |
    | parcel     | dotenv       | eslint        |
    | react      | fastify      | lerna         |
    |            | fastify-cors | typescript    |
    |            | lodash       | yarn          |
    |            | mongoose     |               |
    |            | nodemon      |               |
    |            | pino         |               |
    |            | pino-pretty  |               |
    |            | ts-node      |               |

##  5. <a name='Documentation'></a> Documentation

- All pictures where taken from [Freepik](https://www.freepik.es/)
- Names for reviews where from [this API](https://random-names-api.herokuapp.com/random)
- Users' pics for reviews where from [this API](https://joeschmoe.io/api/v1/male/Johndoe) combined with the name and genre from name's API.
- [Auth0](https://auth0.com/)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Next.js](https://nextjs.org/)
- [React](https://es.reactjs.org/)

##  6. <a name='Acknowledgements'></a> Acknowledgements

To the people of CORE Code School, specially my teacher Marcos and all my colleagues, for doing this possible.

To my sister for motivate this project.

##  7. <a name='License'></a> License

![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)  
This work is licensed under [a Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
