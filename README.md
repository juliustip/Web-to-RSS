# Web to RSS Feed

Turn any website to RSS.

## Getting Started

1. Install the required packages `npm i`
2. Edit the `config.js`
3. Run it! `npm start`

## Config

You can set all this in the `config.js` file.

* date — format for parsing date with [Moment](http://momentjs.com/docs/#/parsing/string-format/)
* link - site to scrape for feed
* name - name of your RSS feed
* selectors - CSS selectors for grabbing parts of the webpage
  * author - selects the item child for post author text
  * date - selects the item child for date text
  * dateRegex (optional) - a JavaScript Regular expression to help find the date to parse
  * description - selects the item child for post body text
  * item - selects the post item
  * title - selects the item child for post title text
  * url - selects the item child's href attribute for post url
