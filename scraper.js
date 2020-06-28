const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

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

var i;
var j;

const result_courses = [];
axios('https://www.futurelearn.com/courses?filter_category=open&filter_course_type=open&filter_availability=open&all_courses=1')
    .then(response => {
        const html = response.data;
        // Pass the HTML document into cheerio in order to parse the document
        const $ = cheerio.load(html);
        // select all classes within the 'grid' of classes
        // .m-card.Container-wrapper_GWW4X.Container-grey_3ORsI
        const courseGrid = $('.m-grid-of-cards.m-grid-of-cards--with-side-nav .Content-wrapper_3r8ku');
        //console.log(courseGrid.length);

        courseGrid.each(function() {
            const college = $(this).find('.label-wrapper_1cWTL > span').text();
            const title = $(this).find('.Title-wrapper_3GPPt > h4').text();
            const description = $(this).find('.text-wrapper_osDIP.text-mediumGrey_iJRmO.text-sBreakpointSizexsmall_1urEo.text-isRegular_1-QX9').text();
            const info = $(this).find('.align-item_2NQyS > .text-wrapper_osDIP.text-coolGrey_1w2As.text-sBreakpointSizexsmall_1urEo.text-isRegular_1-QX9').text();
            
            weeks = info.substr(0, 7); // extract the amount of weeks, REGEX not necessary here
            hours = info.substr(7, 1) + " hrs/week";

            // add extracted data to the 'doc'
            var docToAdd = {
                    college,
                    title,
                    description,
                    weeks,
                    hours
                }
                // console.log(docToAdd);
            result_courses.push(docToAdd); // push the new doc onto the array
        });
    // pipe the result_courses[] to future_learn_courses.json file
    fs.writeFile('future_learn_courses.json', JSON.stringify(result_courses, null, '\t'), (err) => console.log('File written Successfully'))
    })
    .catch(console.error);
