import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'my-app',
  template: '<h1>I hate the homeless...</h1><span>ness problem that plagues this city. Everyone should have the basic... You know what, I don\'t need tiny cue cards!</span>'
})
class AppComponent { }

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
