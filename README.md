# Appstem Website

This is the beginning documentation.
- How it works
- How to edit Markdown content
  - folders and files in 'content/collections' will be returned as JSON
  - files/folders in 'content' will create new routes
  - markdown variables must start on first line with '---', and end with '---'
  - variable names are 'variable:' followed by a space.
  - text can be an unquoted string
  - Other variables follow a pattern of arrays - ['image-filename.png','Heading Text','Each array element from here will be a paragraph', 'This is another paragraph']
- Where to put images
  - /public/assets/images, /public/assets/videos

[appstem.com](https://appstem.com) is built using jdown for handling Markdown, and 
[React Static](https://github.com/nozzle/react-static)
Features
 - React. Enough said.
 - Blazing fast performance.
 - Data Agnostic. Feed your site data from anywhere, however you want.
 - Built for SEO, by SEO professionals
 - React-first developer experience
 - Painless project setup & migration
 - Supports 99.9% of the React ecosystem. Including CSS-in-JS libraries, custom Query layers like GraphQL, and even Redux!
 - Aggressive and flexible reloading.

To get started, run `yarn start` and open http://localhost:3000.
