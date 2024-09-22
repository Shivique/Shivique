import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeCardService {
  private jsonUrl = 'assets/pages/Home-cards.json';

  constructor(private http: HttpClient) {}

  public getCardData(cardNumber: number): Observable<any> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      map(cards => cards.find(card => card.cardNumber === cardNumber))
    );
  }
}
