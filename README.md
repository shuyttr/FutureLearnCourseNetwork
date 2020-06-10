## Requirements
1. [Download and Install NodeJS](https://nodejs.org/en/download/). 
```npm``` package manager is automatically downloaded

2. [Axios](https://github.com/axios/axios) is a "Promise based HTTP client for the browser and node.js." 
```
$ npm install axios
```

3. [Cheerio](https://github.com/cheeriojs/cheerio) is used here to implement [jQuery](https://jquery.com/) methods in order to 'walk through' different elements of the rendered HTML document. 
```
$ npm install cheerio
```

4. [fs](https://nodejs.org/api/fs.html) library piped the contents to [future_learn_courses.json](./future_learn_courses.json)

Check out [scraper.js](./scraper.js) for how the above libraries were initially used

## Course Structure

Example course:
```
"college": "Raspberry Pi Foundation & National Centre for Computing Education",
"title": "Introduction to Cybersecurity for Teachers",
"description": "Explore key concepts of cybersecurity to teach 14-16 year-old students with this online cybersecurity course supported by Google.",
"weeks": "3 weeks",
"hours": "2 hrs/week"
```

## Motivation
This web-scraper was initially part an interview process. My intentions going forward would be to import these courses into a [Neo4j](https://neo4j.com/) database. From here, I'd like to create a front-end application where users would be able to share what courses they have taken, match that to a _web_, and track different relationships between webs. A web is simply a category of courses.

For example, Cybersecurity is a growing field and knowledge of other CS concentrations is critical for success. This [article](https://www.zdnet.com/article/ai-is-changing-everything-about-cybersecurity-for-better-and-for-worse-heres-what-you-need-to-know/) provides an example of the cross-section between cybersecurity and AI. Overall, the final product would be to track which areas of study are most related based on users courses, so we can provide users with how the best route of action to complement their primary courses with other essential courses.
