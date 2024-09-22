import { Component, OnInit } from '@angular/core';
import { FaqServiceService } from '../shared/services/faq-service.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: any;

  constructor(
    private faqService: FaqServiceService
  ){}

  public ngOnInit(){
    this.faqService.getfaqs().subscribe((res: any)=>{
      console.log(res);
      this.faqs = res.questions;
    })
  }

  toggleAnswer(faq: any) {
    faq.showAnswer = !faq.showAnswer;
  }
}
