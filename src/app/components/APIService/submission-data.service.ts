import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SubmissionData } from './submission-data';


@Injectable()
export class submissionDataService {

    constructor( private http: Http ) { };
    
    getSubredditSubmissions( subredditURLs: Array<string> ) {
        for(let subredditURL of subredditURLs) {
            return this.http.get('subredditURL')
                            .map( response => <SubmissionData[]>response.json().data );
        };
    }
    
}

