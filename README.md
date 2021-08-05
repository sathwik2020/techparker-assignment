# README

This project requires you to develop a website template viewer. The template viewer is modeled after the filmstrip folder view in Windows Explorer.

### Technical Requirements

- Develop as a Single Page Application
- Develop both a front-end component and back-end API to retrieve the data.
- Use a javascript front-end implementation of your choice, some suggestions might be ReactJS, Angular or AngularJS
- Create a back-end API implementation with NodeJS/Express

### Reference

![Example Filmstrip](https://github.com/techpacker/filmstrip-view/blob/main/images/reference.png)

### Feature Requirements

- Display the thumbnail images in a filmstrip view below the main large image
- Set the thumbnail to have a sliding window with 4 thumbnails visible in the window at a time.
- Implement a "next" and "previous" link per the styles provided. The sliding window is not circular, when the first 4 thumbnails appear, the previous link should be disabled. When the end of the thumbnail set is reached, the next link should be disabled.
  Note: The sliding window may not have a total of 4 thumbnails if the total template count is not evenly divisible by 4. There are 15 templates in the reference data.
- Example: If there are 15 templates total, then the initial view would show 4 thumbnail images with previous disabled, then clicking "Next" would advance to the next 4 images, next would advance to the next 4, and so on. Finally, there wouild only be 3 images in the sliding window with next disabled and previous enabled.
- When clicking on a thumbnail, the large image corresponding to that thumbnail should appear in the main window, along with the meta data about that template (ID, Cost, Description, Thumbnail File Name, Image File Name)
- Per the reference styles and html, the thumbnail image should have a border when selected.

### Reference Data

- /data/templates.json - Array of templates and meta data
- /images/large - Large size images of templates
- /images/thumbnails - Thumbnail images of templates
- /images/next.png - Button image for next link
- /images/previous.png - Button image for previous link
- index.html - reference HTML
- /style/style.css - reference CSS

### Instructions to run the Angular SPA

- Open terminal and change directory to "filmstrip-view-angular-client" then install all the npm packages and at last start the app

```
  cd ./filmstrip-view-angular-client/
  npm install
  npm start
```

- Now you can see the app running on port 3001

```
  http://localhost:3001/
```

### Instructions to run the React SPA

- Open terminal and change directory to "filmstrip-view-react-client" then install all the npm packages and at last start the app

```
  cd ./filmstrip-view-react-client/
  npm install
  npm start
```

- Now you can see the app running on port 3000

```
  http://localhost:3000/
```

### Instructions to run the Vue SPA

- Open terminal and change directory to "filmstrip-view-vue-client" then install all the npm packages and at last start the app

```
  cd ./filmstrip-view-vue-client/
  npm install
  npm start
```

- Now you can see the app running on port 3002

```
  http://localhost:3002/
```

### Instructions to run the Node Server

- Open terminal and change directory to "filmstrip-view-server" then install all the npm packages and at last start the app

```
  cd ./filmstrip-view-server/
  npm install
  npm start
```

- Now you can see the app running on port 3003

```
  http://localhost:3003/
```

Backend server will serve the static content such as Images to all the Frontend apps and templates through api.
