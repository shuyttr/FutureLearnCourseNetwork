	Submission:
	
I used three JS libraries in my scraper:

1. Axios = https://github.com/axios/axios
  This library is a "Promise based HTTP client for the browser and node.js" which I used to receive a web page via a JS program

2. Cheerio = https://github.com/cheeriojs/cheerio
  "Fast, flexible, and lean implementation of core jQuery designed specifically for the server. https://cheerio.js.org/" and I used this      library to implement jQuery methods in order to 'walk through' the different element of the rendered HTML document. 

3. fs = https://www.w3schools.com/nodejs/nodejs_filesystem.asp
  This library was used to write the contents of my scraping to a output JSON file
  
	Notes:

*All of my source code is available on this github repository. Due to the node_modules having libraries with .dll files, I was not able to successfully include them in the zipping. Additionally, when zipped, they were well above what zip files tend to be, i.e. compressed and ess bytes. The compressed zip file was nearly between 250,000KB and 400,000KB. Additionally, github caps the file size to 100,000KB and aside from a performance standpoint, I was unable to push a zip file this large. Thus, I did not zip the node_modules directory.

*To walk through my process of submission, I first researched some common websracping libraries in JS (request, axios, cheerio, pupeteer) and since the website I scraped https://www.futurelearn.com/coursesfilter_category=open&filter_course_type=open&filter_availability=open&all_courses=1 is static, I felt no need to use pupeteer nor request since I was making one request and scraping that page. I tried to add categories by looping through each 'filter_category' in the url and running axios promise on each url. This slowed the program since there were about 12 concurrent promises (one for each category) and the JSON file was not able to be written to by all these promises.

*My documents contained the following attributes for each course:

	{
		"college",
		"title",
		"description",
		"weeks",
		"hours"
	}
  
  *This task took me about 4 hours. The zipping took about 2 hours since I tried to include the node_modules directory using git, File Explorer, and git actions
