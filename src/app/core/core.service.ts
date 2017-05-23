import { Injectable } from '@angular/core';
import { subredditURLProviderService } from '../components/APIService/subreddit-url-provider.service';
import { submissionDataService } from '../components/APIService/submission-data.service';
import { multiredditService } from '../components/menuMultireddit/multireddit.service'

@Injectable()
export class coreService {
    constructor(
        private subredditURLProviderService: subredditURLProviderService,
        private submissionDataService: submissionDataService,
        private multiredditService: multiredditService
    ) { }
    getDefaultMultiredditNames() {
        return this.multiredditService.multireddits.map(mr=>mr.title);
    }
    getSubredditData(menuItem: string) {
        let subreddits = this.multiredditService.multireddits.find(mr => mr.title === menuItem).subreddits;
        let urls = this.subredditURLProviderService.jsonRequestUrlProvider(subreddits, "top", 5);
        let dataObservables = this.submissionDataService.getSubredditSubmissions(urls);
    }
}