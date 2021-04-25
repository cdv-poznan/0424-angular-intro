import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG } from './app.config';
import { ChangesComponent } from './changes/changes.component';
import { HeadingComponent } from './hello/heading/heading.component';
import { HelloComponent } from './hello/hello.component';
import { TemplatesComponent } from './templates/templates.component';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './highlight.directive';
import { PipesComponent } from './pipes/pipes.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, TemplatesComponent, HeadingComponent, ChangesComponent, UsersComponent, HighlightDirective, PipesComponent, IntroComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: {
        title: 'CDV App',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
