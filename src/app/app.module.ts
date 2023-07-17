import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routing';

@NgModule({
  imports: [BrowserModule, RouterModule],
  providers: [provideRouter(routes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
