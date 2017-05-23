import { Component } from '@angular/core';
import { Core } from '../../core/core.module'


@Component({
    selector: 'menutabs',
    templateUrl: './menu-display.module.html',
    styleUrls: ['./menu-display.module.css']
})

export class menuDisplayComponent {
    constructor(
        private core: Core
    ) { }
    menuItems = this.core.getDefaultMultiredditNames();
}