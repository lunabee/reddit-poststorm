import { SubmissionData } from './submission-data';

export const MOCKDATAS: SubmissionData[] = [{
 "author": "_NITRISS_",
 "subreddit_name_prefixed": "r/aww",
 "title": "\"A little help here guys\"", //Make sure we're adding these escapes
 "thumbnail":  "https://b.thumbs.redditmedia.com/D1tv3wPMUXiQZ3-pVtOnNvzX-fNcfeIaHoTVSN376EU.jpg",
 "selftext_html": null, //This is going to be tricky escaping. Maybe raw text should be grabbed instead?
 "permalink": "/r/aww/comments/6bc8cz/a_little_help_here_guys/", //this will need to be concat with www.reddit.com
 "url": "https://i.imgur.com/xVaKMxj.gif",
 "score": 64006
}] 