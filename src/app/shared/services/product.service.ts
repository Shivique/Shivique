import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  public getBedsData(): Observable<any>{
    return this.http.get('assets/pages/beds.json');
  }

  public getChairsData(): Observable<any>{
    return this.http.get('assets/pages/chairs.json');
  }

  public getConsoleData(): Observable<any>{
    return this.http.get('assets/pages/console.json');
  }

  public getKitchenData(): Observable<any>{
    return this.http.get('assets/pages/kitchens.json');
  }

  public getSofaData(): Observable<any>{
    return this.http.get('assets/pages/sofa.json');
  }

  public getTablesData(): Observable<any>{
    return this.http.get('assets/pages/tables.json');
  }

  public getVanityData(): Observable<any>{
    return this.http.get('assets/pages/vanity.json');
  }

  public getWardrobesData(): Observable<any>{
    return this.http.get('assets/pages/wardrobes.json');
  }

  public getDiningTablesData(): Observable<any>{
    return this.http.get('assets/pages/dining-tables.json');
  }

}
