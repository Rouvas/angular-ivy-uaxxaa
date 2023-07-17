import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { A11y, SwiperOptions } from 'swiper';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  placemarkProperties: ymaps.IPlacemarkProperties = {
    image: '/assets/images/etc/cars/bg_2.jpg',
    label: 'BMW X3 M40',
    year: '2019',
    startPrice: 1900,
    rating: 4.7,
  };

  vehicles: any[] = [
    {
      id: 0,
      label: 'Haval Jolion I',
      year: 2022,
      price: 1900,
      image: '/assets/images/etc/cars/bg_2.jpg',
    },
    {
      id: 0,
      label: 'Haval Jolion I',
      year: 2022,
      price: 1900,
      image: '/assets/images/etc/cars/bg_2.jpg',
    },
    {
      id: 0,
      label: 'Haval Jolion I',
      year: 2022,
      price: 1900,
      image: '/assets/images/etc/cars/bg_2.jpg',
    },
    {
      id: 0,
      label: 'Haval Jolion I',
      year: 2022,
      price: 1900,
      image: '/assets/images/etc/cars/bg_2.jpg',
    },
    {
      id: 0,
      label: 'Haval Jolion I',
      year: 2022,
      price: 1900,
      image: '/assets/images/etc/cars/bg_2.jpg',
    },
    {
      id: 0,
      label: 'Haval Jolion I',
      year: 2022,
      price: 1900,
      image: '/assets/images/etc/cars/bg_2.jpg',
    },
  ];

  placemarkOptions: ymaps.IPlacemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: '/assets/icons/map/pos-pin.svg',
    iconImageSize: [32, 32],
  };

  public config: SwiperOptions = {
    modules: [A11y],
    autoHeight: true,
    spaceBetween: 16,
    loop: false,
    slidesPerView: 'auto',
    lazyPreloadPrevNext: 2,
  };
}
