import { NgModule, Component } from '@angular/core';
import { SubmissionData } from './submission-data';
import { MOCKDATAS } from './submission-data-mocks.component'

@Component({
    selector: 'submission-display',
    templateUrl: './submission-display.component.html',
    styleUrls: ['./submission-display.component.css']
})
export class SubmissionDisplayComponent { 
    SubmissionDatas: SubmissionData[];
    ngOnInit() {
        this.SubmissionDatas = MOCKDATAS;
    }
}
