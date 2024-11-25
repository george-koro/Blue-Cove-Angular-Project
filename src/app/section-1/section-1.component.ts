import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SwiperComponent } from '../swiper/swiper.component';

@Component({
  selector: 'app-section-1',
  standalone: true,
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss',
  imports: [SwiperComponent],
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Section1Component {
  constructor() {}
}
