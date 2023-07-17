import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { AppComponent } from './app.component';
import { register as registerSwiper } from 'swiper/element/bundle';
import { routes } from './app.routing';
import { SwiperDirective } from './directives/swiper.directive';

registerSwiper();

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AngularYandexMapsModule,
    SwiperDirective,
  ],
  providers: [provideRouter(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
