import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { PostDisplayComponent } from './app/components/APIService/app.module'
//import { PostDisplayComponent } from './app/post-display.component'
import { PostDisplayComponent } from './app/components/APIService/post-display.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ PostDisplayComponent ],
  bootstrap: [ PostDisplayComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
