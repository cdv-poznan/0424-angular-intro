import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangesComponent } from './changes/changes.component';
import { HeadingComponent } from './hello/heading/heading.component';
import { HelloComponent } from './hello/hello.component';
import { TemplatesComponent } from './templates/templates.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, TemplatesComponent, HeadingComponent, ChangesComponent, UsersComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
