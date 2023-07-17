import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
} from '@angular/core';
import { SwiperOptions } from 'swiper';

type SwiperHtmlElement = HTMLElement & { initialize: () => void };

@Directive({
  selector: '[raSwiper]',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  private readonly swiperElement: SwiperHtmlElement;

  @Input('config') config?: SwiperOptions;

  constructor(private el: ElementRef, private ngZone: NgZone) {
    this.swiperElement = el.nativeElement as SwiperHtmlElement;
  }

  ngAfterViewInit() {
    Object.assign(this.swiperElement, this.config);
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.swiperElement.initialize();
      });
    });
  }
}
