import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TemplatesComponent } from './templates/templates.component';
import { HeadingComponent } from './hello/heading/heading.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, TemplatesComponent, HeadingComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
