import { Component, ViewEncapsulation } from '@angular/core';
import { Swiper2Component } from '../swiper-2/swiper-2.component';

@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [Swiper2Component],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Section3Component {}
