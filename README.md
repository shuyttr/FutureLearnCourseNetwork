## Requirements

1. [Axios](https://github.com/axios/axios) is a "Promise based HTTP client for the browser and node.js." 

2. [Cheerio](https://github.com/cheeriojs/cheerio) is used here to implement jQuery methods in order to 'walk through' the different element of the rendered HTML document. 

3. [fs](https://nodejs.org/api/fs.html) library piped the contents to [future_learn_courses.json](./future_learn_courses.json)
  

## Document Structure
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
