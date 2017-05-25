import { Component } from '@angular/core';
import { coreService } from '../../core/core.service'
import { multireddit } from './multireddit'


@Component({
    selector: 'menutabs',
    templateUrl: './menu-display.component.html',
    styleUrls: ['./menu-display.component.css']
})

export class menuDisplayComponent {
    selectedMultireddit: string = "Future"
    constructor( private core: coreService) { }
    menuItems = this.core.getDefaultMultiredditNames();

    setSelected(menuItem: string) {
        this.selectedMultireddit = menuItem;
        this.core.getSubredditData(menuItem);
    }
}