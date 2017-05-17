export class SubmissionData {
 author: string;
 subreddit_name_prefixed: string;
 title: string;
 thumbnail: string;
 selftext_html: string; //will be tricky to escape properly. Maybe should grab raw? but then formatting is shot
 permalink: string; //this will need to be concat with www.reddit.com
 url: string;
 score: number;
 submission_hint: string; //equivilant to reddit's post_hint, want consistent naming within app
}