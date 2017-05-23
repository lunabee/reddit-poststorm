import { Injectable } from '@angular/core';

@Injectable()
export class subredditURLProvider {
    jsonRequestUrlProvider(multireddit: Array<string>, subredditSort: string, submissionNum: number) {
        let jsonUrlArray : Array<string> = [];
        for (let subreddit of multireddit) {
            let jsonRequestUrl = 'https://www.reddit.com/r/' + subreddit + '/' + subredditSort + '.json?limit=' + submissionNum;
            jsonUrlArray.push(jsonRequestUrl);
        }
        return jsonUrlArray;
    };

};
//tests for this...
//find multireddit.length, check against returned jsonUrlArray.length
//heuristic string validation