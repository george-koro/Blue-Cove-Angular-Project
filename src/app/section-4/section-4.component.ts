import { Component, ViewEncapsulation } from '@angular/core';
import { Swiper2Component } from '../swiper-2/swiper-2.component';
@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [Swiper2Component],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Section4Component {}
