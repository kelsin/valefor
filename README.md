# Valefor.com

This is the source for valefor.com. It's hosted on github pages and it's built
using a combination of gulp for the front end assets and jekyll for github pages
content.

## Front End Development

You should edit the files in the `_assets` directory and then you can run

    gulp build

to compile them into `js/valefor.js` and `css/valefor.css`. If you want gulp to
watch for changed files and auto build you can run

    gulp

or

    gulp watch

You should commit the js and css files into git since github will not compile
them for us.

## Content Development

Just edit index.html or any of the data files (`_data/*` or `_config.yml`) and
commit. Github will build the page and redeploy!