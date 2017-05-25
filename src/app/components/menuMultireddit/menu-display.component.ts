import { Component } from '@angular/core';
import { coreService } from '../../core/core.service'
import { multireddit } from './multireddit'


@Component({
    selector: 'menutabs',
    templateUrl: './menu-display.component.html',
    styleUrls: ['./menu-display.component.css']
})

export class menuDisplayComponent {
    constructor( private core: coreService) { }
    
    menuItems = this.core.getDefaultMultiredditNames();
    selectedMultireddit: string = this.menuItems[0];

    ngOnInit(){
        this.core.getSubredditData(this.selectedMultireddit);
    }

    setSelected(menuItem: string) {
        this.selectedMultireddit = menuItem;
        this.core.getSubredditData(menuItem);
    }
}