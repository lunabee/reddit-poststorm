export class SubmissionData {
    author: string;
    subreddit_name_prefixed: string;
    title: string;
    thumbnail: string;
    selftext: string; 
    permalink: string; //this will need to be concat with www.reddit.com
    url: string;
    score: number;
    num_comments: number;
    submission_hint: string; //equivilent to reddit's post_hint, want consistent naming within app
}
