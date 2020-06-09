## Requirements

1. [Axios](https://github.com/axios/axios) is a "Promise based HTTP client for the browser and node.js." 
2. [Cheerio](https://github.com/cheeriojs/cheerio) is used here to implement jQuery methods in order to 'walk through' the different element of the rendered HTML document. 
3. [fs](https://nodejs.org/api/fs.html) library piped the contents to [future_learn_courses.json](./future_learn_courses.json)
  

## Course Structure

Example course:
```
"college": "Raspberry Pi Foundation & National Centre for Computing Education",
"title": "Introduction to Cybersecurity for Teachers",
"description": "Explore key concepts of cybersecurity to teach 14-16 year-old students with this online cybersecurity course supported by Google.",
"weeks": "3 weeks",
"hours": "2 hrs/week"
```

## Future Plans
This web-scraper was initially part an interview process. My intentions going forward would be to import these courses into a [Neo4j](https://neo4j.com/) database. From here, I'd like to create a front-end where users would be able to share what courses they have taken, match that to a web, and track different relationships between webs.

For example, Cybersecurity is a growing field and other aspects of computer science can greatly impact the cybersecurity platform. This [article](https://www.zdnet.com/article/ai-is-changing-everything-about-cybersecurity-for-better-and-for-worse-heres-what-you-need-to-know/) provides an example of the cross-section between cybersecurity and AI. Overall, the final product would be to track which fields are most related and give guidance to future users who want to _branch out_ to a different field within their online learning pursuit of knowledge.
