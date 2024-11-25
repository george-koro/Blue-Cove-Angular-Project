import { Component, ElementRef, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section-1/section-1.component';
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';
import { Section4Component } from './section-4/section-4.component';
import { Section5Component } from './section-5/section-5.component';
import { Section6Component } from './section-6/section-6.component';
import { Section7Component } from './section-7/section-7.component';
import { Section8Component } from './section-8/section-8.component';
import { Section9Component } from './section-9/section-9.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeroComponent } from './hero/hero.component';
import { ProposalComponent } from './proposal/proposal.component';
import { SwiperComponent } from './swiper/swiper.component';
import { Swiper2Component } from './swiper-2/swiper-2.component';
import { gsap, Power3 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    Section9Component,
    SidebarComponent,
    HeroComponent,
    ProposalComponent,
    SwiperComponent,
    Swiper2Component,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Blue Cove Angular ';

  constructor(
    private elem: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    gsap.registerPlugin(ScrollTrigger);
  }

  public sidebar: any;
  public days: any;
  public marks: any;

  ngAfterViewInit() {
    const target = this.elem.nativeElement.querySelectorAll('.read-more');
    target.forEach((item: any) => {
      item.addEventListener('click', () => {
        let box = item.parentElement.querySelector('.read-more-hidden');
        // console.log(box);
        if (box.classList.contains('active')) {
          box.classList.remove('active');
          box.style.maxHeight = `0`;
          item.innerHTML = 'Read More +';
        } else {
          box.classList.add('active');
          box.style.maxHeight = `${box.scrollHeight}px`;
          item.innerHTML = 'Read Less -';
        }
      });
    });
    this.sidebar = this.elem.nativeElement.querySelector('.sidebar__inner');
    this.days = this.elem.nativeElement.querySelectorAll(
      '.date-sticky-container'
    );
    const burger = this.elem.nativeElement.querySelector('.header__burger');
    const close = this.elem.nativeElement.querySelector('.header__close');
    const menu = this.elem.nativeElement.querySelector('.sidebar');
    const logo = this.elem.nativeElement.querySelector('.header');
    let listItems = this.elem.nativeElement.querySelectorAll(
      '.sidebar__inner ul li a'
    );
    let logostate = false;

    if (window.scrollY != 0) {
      logo.classList.add('active');
    } else {
      logo.classList.remove('active');
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY != 0) {
        logo.classList.add('active');
      } else {
        logo.classList.remove('active');
      }
    });

    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: Power3.easeOut,
      },
      onStart: () => {
        document.body.classList.add('hide-overflow');
        logo.classList.add('open');
        if (logo.classList.contains('active')) {
          logostate = true;
        }
        logo.classList.add('active');
      },

      onReverseComplete: () => {
        document.body.classList.remove('hide-overflow');
        logo.classList.remove('open');
        if (!logostate) {
          logo.classList.remove('active');
        }
        logostate = false;
      },
    });

    tl.to('.sidebar', {
      yPercent: 150,
      duration: 1.2,
    });

    burger.addEventListener('click', () => {
      tl.play();
    });
    close.addEventListener('click', () => {
      tl.reverse();
    });

    listItems.forEach((item: any) => {
      item.addEventListener('click', function () {
        logostate = true;
        if (window.innerWidth < 1200) {
          tl.reverse();
        }
      });
    });

    setTimeout(() => {
      this.fillList(this.days);
    }, 0);
  }

  createSections(sections: any, target: any = ''): void {
    sections.forEach((item: any) => {
      let listItem: any;
      // console.log(item);
      if (item.id) {
        listItem = target.querySelector(`[href='#${item.id}`);
      }
      ScrollTrigger.create({
        // markers: true,
        trigger: item,
        start: 'top-=95px top+=50px', // when the top of the trigger hits the top of the viewport
        end: item.scrollY, // section height
        onEnter: (self: any) => {
          this.sidebar.querySelectorAll('ul li').forEach((item: any) => {
            item.classList.remove('active');
          });
          if (item.id) {
            listItem.parentElement.classList.add('active');
            listItem.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'start',
            });
          }
        },
        onEnterBack: (self: any) => {
          this.sidebar.querySelectorAll('ul li').forEach((item: any) => {
            item.classList.remove('active');
          });
          if (item.id) {
            listItem.parentElement.classList.add('active');
            listItem.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'start',
            });
          }
        },
      });
    });
  }

  fillList(sections: any): void {
    this.sidebar.querySelectorAll('ul').forEach((item: any) => {
      item.remove();
    });
    this.sidebar
      .querySelectorAll('.sidebar__list-title')
      .forEach((item: any) => {
        item.remove();
      });
    this.createSections(
      this.elem.nativeElement.querySelectorAll('.hero, .proposal, .footer')
    );
    sections.forEach((item: any) => {
      let title = document.createElement('div');
      title.setAttribute('class', 'sidebar__list-title');
      // console.log(item.querySelector(".date-sticky").innerHTML);
      title.innerHTML = item.querySelector('.date-sticky').innerHTML;
      this.sidebar.appendChild(title);
      if (item.querySelectorAll(`*[id^="mark"]`)) {
        let ul = document.createElement('ul');

        item.querySelectorAll(`*[id^="mark"]`).forEach((item: any) => {
          let li = document.createElement('li');
          let a = document.createElement('a');
          a.setAttribute('href', `#${item.id}`);
          a.innerHTML = item.dataset.title;
          li.appendChild(a);
          ul.appendChild(li);
        });
        this.sidebar.appendChild(ul);
        this.createSections(
          item.querySelectorAll(`*[id^="mark"]`),
          this.sidebar
        );
      }
    });
  }
}
