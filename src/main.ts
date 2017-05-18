import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SubmissionDisplayComponent } from './app/components/APIService/submission-display.component'
import { MenuDisplayComponent } from './app/core/menu-display.module'

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ SubmissionDisplayComponent, MenuDisplayComponent ],
  bootstrap: [ SubmissionDisplayComponent, MenuDisplayComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
