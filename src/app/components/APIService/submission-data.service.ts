import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { SubmissionData } from './submission-data';

@Injectable()
export class submissionDataService {
    submissionDataChange: EventEmitter<SubmissionData[]> = new EventEmitter();
    constructor( private http: Http ) { };

    shuffle( array: Array<Response> ) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
    return array;
    };

    getSubredditSubmissions( subredditURLs: Array<string> ) {
        let observables: Array<Observable<Response>> = [];
        for(let subredditURL of subredditURLs) {
            observables.push(this.http.get(subredditURL).map(res => res.json()));
        };
        Observable.forkJoin(observables).subscribe(results => {
            let submissions: Array<Response> = [];
            for(let result of results) {
                submissions = submissions.concat(result["data"]["children"]);
            };
            this.shuffle(submissions);
            let submissionDataArray: SubmissionData[] = [];
            for (let submission of submissions){
                let submissionData = new SubmissionData();
                submissionData.title = submission["data"]["title"];
                submissionData.author = submission["data"]["author"];
                submissionData.subreddit_name_prefixed = submission["data"]["subreddit_name_prefixed"];
                submissionData.thumbnail = submission["data"]["thumbnail"];
                submissionData.selftext = submission["data"]["selftext"];
                submissionData.permalink = submission["data"]["permalink"];
                submissionData.url = submission["data"]["url"];
                submissionData.score = submission["data"]["score"];
                submissionData.num_comments = submission["data"]["num_comments"];
                submissionData.submission_hint = submission["data"]["post_hint"];
                submissionDataArray.push(submissionData);
            };
            
            this.submissionDataChange.emit(submissionDataArray);
        });
    }
    
}

