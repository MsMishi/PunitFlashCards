FLASH CARDS
Specs:
- Going to `/cards/new` should render the new card page
  - I should be able to select a topic for the new card. Options are SQL or JavaScript
- Submitting the form on the above page, should create the card with the data.
- Going to `/cards` should render all the cards in my cards table.
- Going to `/cards/category/:category` should render the cards which matches the category
UI Specs:
- Each card should only show the question when I load the cards page.
- Each card should have a `Show Answer` link. When I click on the link, the answer gets gets appended to the card, and a `Hide Answer` link appears. Clicking on the `Hide Answer` link, hides the answer. This interaction should happen using JavaScript Event Listeners
Testing Specs:
- Write tests for your DB functions
Steps to build the project
1. Identify all NOUNS in the requirements.
2. Identify the entity relationships between the NOUNS. Eg: 1:1, 1:many, many:many (Look at Trevor's video - https://www.youtube.com/watch?v=62qx1Xu2ykA&feature=youtu.be)
3. Come with up the SQL schema. It becomes a mechanical process to come up with the SQL schema.
4. Identify all the VERBS in the requirements
5. Write SQL database query functions for the verbs. (Name of functions = verb)
6. Create an Express server
7. Create GET routes for the different pages
8. Add HTML for the GET routes
9. Create POST routes for the creation of a NOUN.
10. Ensure your route functions are calling the right VERBS DB functions
# PunitFlashCards
