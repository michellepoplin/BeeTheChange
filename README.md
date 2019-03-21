# BeeTheChange

A website that allows Farmers to get sponsorships to start Bee Harvesting.

INSTRUCTIONS:

Running Locally:

`npm start`

Running Production:

`NODE_ENV=production npm start`

TODO:

- Posting from the post form into the posts database
- Farmers Database (with dummy info)
- Farmer Search (maybe based on state "location" and have all the examples in NC so they all show up in the search results for demonstration purposes, will need to add location to the farmer schema)
- User Database (to store: image, bio, posts) (with dummy info)
- Switching the placeholder image with the image chosen in modal
- Edit button that allows user to input bio info
- Merge Login Authentication code from KA
- Set up the settings page and create a link to it in the navbar
- Fix the last bit of the paypal code so that the pop up renders and gives you the option to donate

ORDER:

1. User Database for User Image, aboutMe, and their Posts
2. Switching the placeholder image with the User input image and the About me filler with the User input aboutMe
3. Farmers Database (Image, AboutMe) and ability to search it using search input in nav
