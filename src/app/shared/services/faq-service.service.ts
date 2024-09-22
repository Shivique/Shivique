import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getfaqs(): Observable<any>{
    return this.httpClient.get('assets/pages/faq.json');
  }
}
