import { Component, ViewEncapsulation } from '@angular/core';
import { Swiper2Component } from '../swiper-2/swiper-2.component';

@Component({
  selector: 'app-section-6',
  standalone: true,
  imports: [Swiper2Component],
  templateUrl: './section-6.component.html',
  styleUrl: './section-6.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Section6Component {}
