import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild , CUSTOM_ELEMENTS_SCHEMA,ViewEncapsulation} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';



// SwiperCore.use([Pagination]);
@Component({
  selector: 'app-swiper',
  standalone:true,
  imports: [NgFor],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
     schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  encapsulation: ViewEncapsulation.None
 
})


export class SwiperComponent   {
@ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;



ngAfterViewInit(): void {

  Object.assign(this.swiper.nativeElement,this.swiperConfig )
}

contents: string[] = ['./assets/images/hotel1.png','./assets/images/hotel1.png', './assets/images/hotel1.png'];
 

 index :number = 0;
 
 

 swiperConfig: SwiperOptions = {
  pagination: {
    clickable: true,
  },
  grabCursor:true,
 speed: 400,
 spaceBetween: 20,
}



}


 
