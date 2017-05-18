import { NgModule, Component } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SubmissionDisplayComponent } from './app/components/APIService/submission-display.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ SubmissionDisplayComponent ],
  bootstrap: [ SubmissionDisplayComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
