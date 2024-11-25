import { NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  Input,
} from '@angular/core';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-swiper-2',
  standalone: true,
  imports: [NgFor],
  template: ` <div class="{{ sectionOption[section] }}__buttons">
      <img
        class="swiper-button-next"
        (click)="onNext()"
        src="assets/images/Vector1.png"
        alt=""
      />
      <img
        class="swiper-button-prev"
        (click)="onPrev()"
        src="assets/images/Vector2.png"
        alt=""
      />
    </div>
    <swiper-container appSwiper2 #swiper2>
      <swiper-slide *ngFor="let item of contents" class="swiper-slide">
        <img src="{{ item }}" alt="" />
      </swiper-slide>
    </swiper-container>`,
  styleUrl: './swiper-2.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class Swiper2Component {
  @Input() section: number = 0;
  @ViewChild(`swiper2`)
  swiper!: ElementRef<SwiperContainer>;

  constructor() {}

  sectionOption: string[] = ['leisure', 'hotels-2', 'tours-3'];

  contentsLeisure: string[] = [
    'assets/images/leisure1.png',
    'assets/images/leisure1.png',
    'assets/images/leisure1.png',
  ];
  contentsHotels: string[] = [
    'assets/images/hotel21.png',
    'assets/images/hotel21.png',
    'assets/images/hotel21.png',
  ];
  contentsTours: string[] = [
    'assets/images/toursslider.png',
    'assets/images/toursslider.png',
    'assets/images/toursslider.png',
  ];

  contents: string[] = [];

  ngOnInit() {
    if (this.section === 0) {
      this.contents = this.contentsLeisure;
    } else if (this.section === 1) {
      this.contents = this.contentsHotels;
    } else {
      this.contents = this.contentsTours;
    }
  }

  ngAfterViewInit(): void {
    Object.assign(this.swiper.nativeElement, this.swiperConfig[this.section]);
  }

  onNext() {
    this.swiper.nativeElement.swiper.slideNext();
  }
  onPrev() {
    this.swiper.nativeElement.swiper.slidePrev();
  }

  swiperConfig: SwiperOptions[] = [
    {
      breakpoints: {
        100: {
          grabCursor: true,
          speed: 400,
          spaceBetween: 10,
          slidesPerView: 1.2,
        },
        991: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
      },
    },
    {
      breakpoints: {
        100: {
          grabCursor: true,
          speed: 400,
          spaceBetween: 10,
          slidesPerView: 1,
        },
        769: { slidesPerView: 1.2, spaceBetween: 20 },
      },
    },
    {
      breakpoints: {
        100: { grabCursor: true, speed: 400, spaceBetween: 10 },
        769: { slidesPerView: 1, spaceBetween: 20 },
        991: { slidesPerView: 1.6, spaceBetween: 20 },
      },
    },
  ];
}
