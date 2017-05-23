
import { subredditURLProvider } from '../components/APIService/subreddit-url-provider.service';
import { submissionDataService } from '../components/APIService/submission-data.service';
import { multiredditService } from '../components/menuMultireddit/multireddit.service'

export class Core {
    constructor(
        private subredditURLProviderService: subredditURLProvider,
        private submissionDataService: submissionDataService,
        private multiredditService: multiredditService
    ) { }
    getDefaultMultiredditNames() {
        let multiredditNames = this.multiredditService.multireddits.map(mr=>mr.title);
    }
    getSubredditData() {
        let urls = this.subredditURLProviderService.jsonRequestUrlProvider([], "asc", 50);
        let dataObservables = this.submissionDataService.getSubredditSubmissions(urls);
    }
}