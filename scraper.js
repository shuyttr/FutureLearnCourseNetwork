const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

/*
    Take an int and give back the price plan
*/
function getPrice(j) {
    var type;
    switch (j) {
        case 0:
            type = 'unlimited';
            break;
        case 1:
            type = 'premium';
            break;
        case 2:
            type = 'sponsored';
            break;
        default:
    }
    return type;
}
//const url = 'https://www.futurelearn.com/courses?filter_category=8&filter_course_type=unlimited&filter_availability=open&all_courses=1';
//var type;
var i;
var j;

const result_courses = [];
//console.log(type);
axios('https://www.futurelearn.com/courses?filter_category=open&filter_course_type=open&filter_availability=open&all_courses=1')
    .then(response => {
        const html = response.data;
        //need to pass in the HTML document into Cheerio in order to parse the document
        const $ = cheerio.load(html);
        //select all classes within the 'grid' of classes
        //.m-card.Container-wrapper_GWW4X.Container-grey_3ORsI
        const courseGrid = $('.m-grid-of-cards.m-grid-of-cards--with-side-nav .Content-wrapper_3r8ku');
        //console.log(courseGrid.length);

        courseGrid.each(function() {
            const college = $(this).find('.label-wrapper_1cWTL > span').text();
            const title = $(this).find('.Title-wrapper_3GPPt > h4').text();
            const description = $(this).find('.text-wrapper_osDIP.text-mediumGrey_iJRmO.text-sBreakpointSizexsmall_1urEo.text-isRegular_1-QX9').text();
            const info = $(this).find('.align-item_2NQyS > .text-wrapper_osDIP.text-coolGrey_1w2As.text-sBreakpointSizexsmall_1urEo.text-isRegular_1-QX9').text();
            /*
            Since the website stores three types of data in divs with the following three classes 
                .text-wrapper_osDIP
                .text-coolGrey_1w2As
                .text-sBreakpointSizexsmall_1urEo
                .text-isRegular_1-QX9 
            a normal $(this).find().text() returns them all in one string
            //console.log(info);
            thus I parsed the info with string util methods
            */
            weeks = info.substr(0, 7); //extract the amount of weeks, REGEX not necessary here
            hours = info.substr(7, 1) + " hrs/week";

            //add to the array
            var docToAdd = {
                    college,
                    title,
                    description,
                    weeks,
                    hours
                }
                //console.log(docToAdd);
            result_courses.push(docToAdd);
        });
        fs.writeFile('future_learn_courses.json', JSON.stringify(result_courses, null, '\t'), (err) => console.log('File written Successfully'))
    })
    .catch(console.error);