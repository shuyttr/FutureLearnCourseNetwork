## Requirements

1. [Axios](https://github.com/axios/axios)
  This library is a "Promise based HTTP client for the browser and node.js" which I used to receive a web page via a JS program

2. Cheerio = https://github.com/cheeriojs/cheerio
  "Fast, flexible, and lean implementation of core jQuery designed specifically for the server. https://cheerio.js.org/" and I used this      library to implement jQuery methods in order to 'walk through' the different element of the rendered HTML document. 

3. fs = https://www.w3schools.com/nodejs/nodejs_filesystem.asp
  This library was used to write the contents of my scraping to a output JSON file
  

## Document Structure
My documents contained the following attributes for each course:

	{
		"college",
		"title",
		"description",
		"weeks",
		"hrs/week"
	}
