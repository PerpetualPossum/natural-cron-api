# natural-cron-api
Extremely simplistic API for running the `getCronString` function of [darkeyedevelopers/natural-cron.js](https://github.com/darkeyedevelopers/natural-cron.js)

I was mildly bothered that there wasn't a simple public API for taking in plain english and spitting out a cron schedule, so here it is.

Of note, invalid inputs result in a cron schedule of `* * * * ? *`, so valid input that gives you this result will cause a 400.