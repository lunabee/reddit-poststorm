import { Component } from '@angular/core/core';
import { PostData } from './post-data';
import { MOCKDATAS } from './post-data-mocks.component'

@Component({
    selector: 'post-display',
    templateUrl: 'post-display.component.html',
    styleUrls: ['post-display.component.css']
})

export class PostDisplayComponent {
    PostDatas: PostData[];
    ngOnInit() {
        this.PostDatas = MOCKDATAS;
    }
}
