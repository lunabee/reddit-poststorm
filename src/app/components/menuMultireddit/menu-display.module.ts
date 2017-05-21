import { Component } from '@angular/core';

@Component({
    selector: 'menutabs',
    templateUrl: './menu-display.module.html',
    styleUrls: ['./menu-display.module.css']
})

export class MenuDisplayComponent { 
    // I want these to be dynamically generated based on file in core
    menuItems = [{
        "title": "Future",
        "isSelected": true
    },
    {
        "title": "TechHumor",
        "isSelected": false
    }]
  //  setSelected(){
  //      this.menuItems.isSelected = true;
  //  }
}