![Dashboard Mockup](https://github.com/charleenmperrier/MediMe/blob/docs/mockup/docs/dashboard-mockup.png)

# MediMe

MediMe is a mobile health passport developed with the intention to help improve current healthcare efficiency, and to enhance the doctor-patient experience. This app is perfect for individuals who would like to have a central place to keep track of all their medical health records.

## Project Stack

**Front-End**: HTML, SASS, JavaScript, React, Axios, Material UI  
**Back-End**: Express, Nodejs, ElephantSQL, PostgreSQL  
**Testing**: Storybook, JEST, Cypress

## Final Product

![Screens Mockup](https://github.com/charleenmperrier/MediMe/blob/docs/mockup/docs/screens-mockup.png)

#### Lab record tracking

![Labs gif](https://github.com/charleenmperrier/MediMe/blob/docs/gif/docs/medime-labs.gif)

#### Medication instructions and refills

![Meds gif](https://github.com/charleenmperrier/MediMe/blob/docs/gif/docs/medime-meds.gif)

#### Vaccination dose schedule

![Vax and dose gif](https://github.com/charleenmperrier/MediMe/blob/docs/gif/docs/medime-vax-dose.gif)

## Getting Started

Fork this repository, and clone your fork of the repository. You will need to have TWO terminals to run the app.

#### React Front End

1. In one terminal, `cd` into `react-front-end` and install the dependencies with `npm install`

2. Once the dependencies are installed, run `npm start`

3. In your browser, go to `localhost:3001`

4. Sign up for your MediMe account!

#### Database Setup

1. In the second terminal, `cd` into `express-back-end` and create a `.env` file by using `.env.example` as a reference: `cp .env.example .env`

2. Create an ElephantSQL account on their webpage: https://www.elephantsql.com/ and copy the URL or database authentication info into the `.env` file

3. To reset database, `cd` into `express-back-end` and run command: `npm run db:reset`

#### Express Back End

1. After database is set up, within `express-back-end` install the dependencies with `npm install`

2. Once the dependencies are installed, run `npm start` to start the server

## Dependencies

#### React Front End

- Axios
- Classnames
- Material UI
- Node-sass
- Normalize.css
- React
- React-dom
- React-router-dom
- React-scripts
- Web-vitals

#### Express Back End

- Bcryptjs
- Body-parser
- Dotenv
- Express
- Pg
- Pg-native
