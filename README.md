# FEC
Deliver a fully functional web application that meets the specifications and requirements outlined by project stakeholders. Work together on a single code base by dividing up the work among team members but working collaboratively to produce a single front end application. Integrate your front end with the existing API for the product, and demonstrate your working application at the end of the project timeline.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB "React.js")
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white "NodeJS")
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white "Express")
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white "MySQL")
![BootStrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white "Bootstrap")
![StyledComponents](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white "StyledComponents")
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

Project Title: Project Catwalk

How to start the project: In a terminal run npm install. In two seperate terminals, run npm start and npm run build. Once npm start is running, open localhost:3000 in a web browser.

Table of Contents:
1. Product Overview
2. Ratings & Reviews
3. Questions & Answers
4. Related Items & Comparison

Description:
1. Product Overview: This component will guide the customer through selecting a specific style and size to add to their cart.   As such, portions of the Overview module are listed below.
  - Product information:
    - Star ratings (# of reviews). Each product has an average rating based on its reviews. A link stating “Read all [#] reviews” will scroll to the Ratings & Reviews module.
    - Product category
    - Product Title
    - Price reflects differently between styles and shows discounted prices with a strikethrough line.
    - Product overview contains a free form that is displayed when available.
    - Share on social media provides the ability to share this product on popular social media platforms.  This includes:
      - Facebook
      - Twitter
      - Pinterest
  - Style selector: the user is presented with all the styles of the product and have the ability to toggle between them. There is no limit to the number of styles a product can have. By default, the style selected will be the first in the list and a product will always have one style. A user will be able to change the selected style.
  - Add to cart: allows the user to select the size and quantity of the item to add to their cart. The options available within these dropdowns will vary based on the selected product style9.
  - Style selector: will list all of the available sizes for the currently selected style or “OUT OF STOCK”.
  - Quantity selector: will allow the user to select a quantity of the current style and relative size to add to their cart. The maximum selection is capped by either the quantity of the style and size in stock, or a hard limit of 15.
  - Add to cart: This button will be used to place the style, size, and quantity of the product selected into the user’s cart. If there is no stock: This button is hidden.
  - Image gallery: The photos presented in this gallery will be specific to the currently selected product style.  Each time a new style is chosen, the gallery updates to show photos corresponding to the new style and will have a set of images associated with it.  The gallery will allow customers to browse in different viewable states.

2. Ratings & Reviews: The Ratings & Reviews module will allow viewing and submission of reviews for the product selected.  The functionality contained within this module can be divided into several pieces:
  - Reviews List: This list will display all the reviews that have been submitted for the product being viewed. There are different filtered views depending on the number of reviews submitted.
  - Individual review list: subcomponent of each review will be displayed on a single tile within the list and contain the following:
    - Visual star rating
    - Date of review
    - Review Summary
    - Review Body
    - Recommended
    - Reviewer Name
    - Response to review
    - Rating helpfulness
  - Sort Options: Users will be able to change the ordering of products. The filtered options include:
    - Helpful: This sort order will prioritize reviews that have been found helpful by “No” and “Yes” responses of reviews.
    - Newest: The most recent reviews will appear first.
    - Relevant: determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received.
  - Rating Breakdown: displays the average rating for the product.  The rating is displayed both as a number value as well as represented by star icons. The star count will be displayed and clicking on the breakdown for a star count will filter the reviews list so that only reviews of that rating display.
  - Product Breakdown: The percentage of reviews that ‘recommend’ the product will be displayed. Reviews will provide the ability to give feedback on specific characteristics of the product.   The characteristics include Size, Width, Comfort, Quality, Length, and Fit. Feedback for characteristics will be on a 5 point scale. On the bar, a single icon will appear representing the average value received via reviews submitted.
  - Write a new Review: will appear allowing users to create new reviews for the product.   This button should always be available on any product page.
    - Overall Rating (mandatory): 1-5 stars.
    - Do you Recommend this product (mandatory): “Yes” and “No”.
    - Characteristics (mandatory): Any characteristics designated as applicable for the current product will appear in this area.  Chart guide for reviews is provided.
    - Review Summary: A text input allowing up to 60 characters.
    - Review Body (mandatory): “Why did you like the product or not?”. A text input allowing up to 1000 characters. The review must be over 50 characters long in order to be submitted.
    - Upload your photos (mandatory): A button will appear allowing users to upload their photos to the form. A user is able to add up to five images.
    - What is your nickname (mandatory): A text input allowing up to 60 characters for the user’s display name. Protected privacy statement included.
    - Your email (mandatory): A text input allowing up to 60 characters. Authentication statement included.
    - Submit review (button): A button by which the review can be submitted. Upon selecting this button the form’s inputs should be validated.   If there are any invalid entries, the submission should be prevented, and a warning message will appear.
  - Keyword Search: a search bar will allow the user to filter the reviews for any that contain text matching the search term.

3. Questions & Answers: The Questions & Answers module will allow asking and answering of questions for the product selected.  The functionality contained within this module can be divided into several pieces:
  - Questions List: list of questions that have been asked about the given product and their corresponding answers. Questions appear in order of ‘helpfulness’,  and contain all questions by default but potential to be filtered to a subset based on user searches.
  - Individual Question: Each question within the list will offer the same information and set of features.
    - Question: The question itself will display at the top, preceded by the text “Q:”.
    - Answers List: A list of answers will appear below the question. If the answer is from the seller, then the username “Seller” is in bold.   A link should appear next to the text “Helpful?” reading “Yes (#)” with the count of selections for that answer. Answers appear in the order of ‘helpfulness’ and the list is scrollable.
    - Was this question helpful:   A customer should not be able to vote multiple times for a selection. “Yes (#)” with the count of selections for that answer will increase for each vote.
    - Add an answer: Clicking on this link opens up a modal window containing a form through which answers can be submitted.
    - Search Questions: Search terms entered in this text input will filter the list for matching results.
  - More Answered Questions: The list will by default only display up to 2 questions asked. If there are 2 or less questions for the given product, then the button will not appear. The maximum height of the questions list is capped to fit on a single screen and the list becomes scrollable.
  - Asking a question: a button will appear allowing users to create a new question for the product and available on each product page.
    - Your question (mandatory): This text input allows up to 1000 characters.
    - What is your nickname (mandatory): A text input allowing up to 60 characters for the user’s display name. Privacy statement included.
    - Your email (mandatory): A text input allowing up to 60 characters.  Authentication statement included.
    - Submit question (button): A button by which the question can be submitted. If there are any invalid entries, the submission should be prevented, and a warning message will appear.
    - Answering a question
  - Add an Answer Module: Through the link provided on each question within the Questions list, users will be allowed to submit an answer for the product.
    - Your answer (mandatory): This text input allows up to 1000 characters.
    - What is your nickname (mandatory): A text input allowing up to 60 characters for the user’s display name. Privacy statement included.
    - Your email (mandatory): A text input allowing up to 60 characters.  Authentication statement included.
    - Upload your photos: allowing users to upload their photos to the form.  Up to five photos should be allowed for each answer.
    - Submit answer (button): A button by which the answer can be submitted. If there are any invalid entries, the submission should be prevented, and a warning message will appear.

Team Members:
  - Widget owners:
    1.
    2.
    3.

Roadmap: What future enhancements are planned? What is the current status of the project? Is it being actively maintained?

License: If open source, state how the project is licensed.

Installation:
 --Provide a list of steps that another developer to get the project up an running on their own
 --What dependencies are required?
 --Other envt. rquirements?

Usage:
 --Further details on how the project is meant to be used
 --If using a library framework outline how to use the library within another project

Folder Structure: MVC

Optional/Other:
 --Related projects
 --Team members
 --Git workflow steps
 --Roadmap (current state of the project and future goals)
 --Liscense(if open source explain how the project is liscenced
