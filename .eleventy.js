const moment = require('moment');

moment.locale('en');

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats([
        "md",
        "css"
    ]);

    eleventyConfig.addFilter('dateIso', date => {
        return moment(date).toISOString();
    });

    eleventyConfig.addFilter('dateReadable', date => {
        return moment(date).utc().format('LL'); // E.g. May 31, 2019
    });

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
    });

    // Folders to copy to output folder
    eleventyConfig.addPassthroughCopy('css')
};

