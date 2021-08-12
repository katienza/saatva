# Saatva Hiring Test

## Ken Atienza

August 11, 2021

# Desktop Screenshot
<img width="1680" alt="Screen Shot 2021-08-11 at 7 49 34 PM" src="https://user-images.githubusercontent.com/39304572/129140861-7cae0949-db13-498a-8446-4c16633e4745.png">

# Mobile Screenshot
<img width="332" alt="Screen Shot 2021-08-11 at 7 49 49 PM" src="https://user-images.githubusercontent.com/39304572/129140891-5a2a87c8-8a5f-4961-b834-7d13014cd864.png">

# Running Locally

1. Clone repository
2. Open terminal
3. Run `npm install`
4. In the same terminal, `run npm start`
5. Open http://localhost:3000 to view it in the browser.
6. Run `jest App.test.js` to execute test

## Prompt

# Mattress Shop Page

Create a single page React application using the screen shot provided (mock.png) as your guide. Please use the data provided in mattresses.json to populate the mattress data in the application.

We recommend using Create React App, but if you roll your own build, please include the node version or an .nvmrc file and any other instructions or dependencies.

# UI

1. The design should match the mock as best as possible.

- You can use a UI framework (ex. Bootstrap) if preferred, BUT you must build at least the mattress selection toggle from scratch.
- Use a cart icon of your choice.

2. We have only provided the design for the desktop view. You are responsible for deciding how the application will scale to a mobile experience.
3. Use fonts 'Source Serif Pro' for the "Choose Your Mattress" header and 'Questrial' for body copy. These can be found on google fonts website.

# Functionality

1. The user should have the ability to toggle between mattresses.
2. As the mattress selection changes:

- the selected mattress name and price should be reflected below the mattress toggle.
- the selected mattress image should be reflected to the left of the configuration area (image files can be found in /images)

3. The "Add to Cart" button should increment the cart item count (in the top right of the view)

# Get Creative!

The following requirements are loose - this is an opportunity to make the app your own!

1. Display the Review Rating for the selected mattress.
2. Add an animation where you see fit.

# Bonus Items

1. Use a css preprocessor if you prefer sass or less.
2. Add your own flair to the app.
3. Add a unit test for the "Add to Cart" functionality.
