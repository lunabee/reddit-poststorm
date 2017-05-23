import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { subredditURLProviderService } from '../components/APIService/subreddit-url-provider.service';
import { submissionDataService } from '../components/APIService/submission-data.service';
import { submissionDisplayComponent } from '../components/APIService/submission-display.component'
import { multiredditService } from '../components/menuMultireddit/multireddit.service'
import { menuDisplayComponent } from '../components/menuMultireddit/menu-display.component'
import { coreService } from './core.service'

@NgModule({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ submissionDisplayComponent, menuDisplayComponent ],
    providers: [ multiredditService, submissionDataService, subredditURLProviderService, coreService ],
    bootstrap: [ submissionDisplayComponent, menuDisplayComponent ]
    
})
export class coreModule { }