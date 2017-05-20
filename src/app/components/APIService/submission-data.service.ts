import { Injectable } from '@angular/core';
import { SubmissionData } from './submission-data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class SubmissionDataService {

    constructor( private http: Http ) { };
    
    getSubredditSubmissions( subredditUrl: Array<string> ) {
        return this.http.get('subredditUrl')
                        .map( response => <SubmissionData[]>response.json().data );
    }
    
}