import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Core } from './core/core.module'

@NgModule({
  imports: [ BrowserModule, HttpModule, Core ],
  declarations: [ ],
  providers: [ Core ],
  bootstrap: [ ]
})
export class AppModule {}