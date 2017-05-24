import { NgModule, Component } from '@angular/core';
import { SubmissionData } from './submission-data';
import { MOCKDATAS } from './submission-data-mocks.component'
import { submissionDataService } from './submission-data.service';

@Component({
    selector: 'submission-display',
    templateUrl: './submission-display.component.html',
    styleUrls: ['./submission-display.component.css']
})
export class submissionDisplayComponent { 
    SubmissionDatas: SubmissionData[];
    constructor(private submissionDataService: submissionDataService) {}
    ngOnInit() {
        var that = this;
        this.submissionDataService.submissionDataChange
            .subscribe(function(datas: SubmissionData[]) {
                that.SubmissionDatas = datas;
            });
    }
}
