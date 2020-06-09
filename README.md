## Requirements

1. [Axios](https://github.com/axios/axios) is a "Promise based HTTP client for the browser and node.js." 
2. [Cheerio](https://github.com/cheeriojs/cheerio) is used here to implement jQuery methods in order to 'walk through' the different element of the rendered HTML document. 
3. [fs](https://nodejs.org/api/fs.html) library piped the contents to [future_learn_courses.json](./future_learn_courses.json)
  

## Output Structure
My documents contained the following attributes for each course:
```
{
	"college",
	"title",
	"description",
	"weeks",
	"hrs/week"
}
```

## Future Plans
This web-scraper was initially part an interview process. My intentions going forward would be to import these courses into a [Neo4j](https://neo4j.com/) database. From here, I'd like to create a front-end where users would be able to share what courses they have taken, match that to a web, and track different relationships between webs.

For example, Cybersecurity is a growing field and other aspects of computer science can greatly impact the cybersecurity platform. This [article](https://www.zdnet.com/article/ai-is-changing-everything-about-cybersecurity-for-better-and-for-worse-heres-what-you-need-to-know/#:~:text=Artificial%20intelligence%20(AI)%20and%20machine,or%20a%20new%20variant%20of) provides an example of the cross-section between cybersecurity and AI. Overall, the final product would be to track which fields are most related and give guidance to future users who want to _branch out_ to a different field within their online learning pursuit of knowledge.
