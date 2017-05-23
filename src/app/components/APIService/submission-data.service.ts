import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { SubmissionData } from './submission-data';

@Injectable()
export class submissionDataService {

    constructor( private http: Http ) { };
    
    getSubredditSubmissions( subredditURLs: Array<string> ) {
        console.log(subredditURLs);
        let observables: Array<Observable<Response>> = [];
        for(let subredditURL of subredditURLs) {
            observables.push(this.http.get(subredditURL).map(res => res.json()));
        };
        console.log(observables);
        Observable.forkJoin(observables).subscribe(results => {
            console.log(results);
            let submissions: Array<Response> = [];
            for(let result of results) {
                submissions = submissions.concat(result["data"]["children"]);
            };
            console.log(submissions);
            return submissions;
        });
    }
    
}

