import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FaqServiceService } from '../shared/services/faq-service.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeCardComponent } from '../shared/home-cards/home-card/home-card.component';
import { HomeCardService } from '../shared/services/home-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private faqService: FaqServiceService,
    private homeCardService: HomeCardService,
    private dialog: MatDialog
  ){}
  sidenavOpened = false;
  reviews: any;
  
  cards = [
    { title: 'BEDROOM SETUP', number: 1, description: 'Lorem ipsum is simply dummy text of the printing and typesetting.', link: '#' },
    { title: 'KITCHEN SETUP', number: 2, description: 'Lorem ipsum is simply dummy text of the printing and typesetting.', link: '#' },
    { title: 'CLEAN FAMILY ROOM', number: 3, description: 'Lorem ipsum is simply dummy text of the printing and typesetting.', link: '#' },
    { title: 'OFFICE SETUP', number: 4, description: 'Lorem ipsum is simply dummy text of the printing and typesetting.', link: '#' },
  ];

  getRandomSpan(): number {
    return Math.floor(Math.random() * 2) + 1;
  }
  
  toggleSubItems(menuItem: any) {
    menuItem.expanded = !menuItem.expanded;
  }

  onSidenavClose() {
    this.sidenavOpened = false;
  }

  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
  @ViewChild('introVideo', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;


  playVideo(): void {
    const video = this.videoElement.nativeElement;
    
    // Load the video and attempt to play it
    video.load();
    video.play().catch(error => {
      console.error('Video playback failed:', error);
    });
  }

  ngOnInit() {
    this.setup();
    window.addEventListener('click', () => this.playVideo(), { once: true });
    window.addEventListener('touchstart', () => this.playVideo(), { once: true });
    this.faqService.getfaqs().subscribe((res: any) => {
      console.log('faq', res);
      this.reviews = res.questions;
    })
  }

  setup() {
    const numCols = 3;
    const colHeights = Array(numCols).fill(0);
    const container = this.container.nativeElement;

    Array.from(container.children).forEach((child: any, i: number) => {
      const order = i % numCols;
      child.style.order = order;
      colHeights[order] += parseFloat(child.clientHeight);
    });
    container.style.height = Math.max(...colHeights) + "px";
  }

  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.reviews.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.reviews.length;
  }

  getSlideClass(index: number) {
    if (index === this.currentSlide) {
      return 'active';
    } else if (index === (this.currentSlide === 0 ? this.reviews.length - 1 : this.currentSlide - 1)) {
      return 'left';
    } else if (index === (this.currentSlide + 1) % this.reviews.length) {
      return 'right';
    }
    return '';
  }  

  openDialog(card: any): void {
    this.homeCardService.getCardData(card.number).subscribe((cardData) => {
      this.dialog.open(HomeCardComponent, {
        data: cardData,
        width: '80%',
        height: 'auto',
      });
    });
  }

}
