## Requirements
1. [Download and Install NodeJS](https://nodejs.org/en/download/). 
```npm``` package manager is automatically downloaded

2. [Axios](https://github.com/axios/axios) is a "Promise based HTTP client for the browser and node.js." 
```javascript
$ npm install axios
```

3. [Cheerio](https://github.com/cheeriojs/cheerio) is used here to implement [jQuery](https://jquery.com/) methods in order to 'walk through' different elements of the rendered HTML document. 
```javascript
$ npm install cheerio
```

4. [fs](https://nodejs.org/api/fs.html) library piped the contents to [future_learn_courses.json](./future_learn_courses.json)

Check out [scraper.js](./scraper.js) for how the above libraries were initially used

## Course Structure

Example course:
```javascript
"college": "Raspberry Pi Foundation & National Centre for Computing Education",
"title": "Introduction to Cybersecurity for Teachers",
"description": "Explore key concepts of cybersecurity to teach 14-16 year-old students with this online cybersecurity course supported by Google.",
"weeks": "3 weeks",
"hours": "2 hrs/week"
```
