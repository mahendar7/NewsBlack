import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../models/newsItem';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class Newsservice {

  BASE_URL = 'https://newsapi.org/v2/';
  API_KEY = 'f082abf1066b437581f823785a2394d0';

  constructor(private http: HttpClient) { }

  // To get All News
  getAll(countryCode: string) {
    return this.http
      .get<NewsItem>(this.BASE_URL + 'top-headlines?country=' + countryCode + '&apiKey=' + this.API_KEY)
      .pipe(map((res: any) => res.articles));
  }

  // To get News by Passing From Date and To Date
  getByDate(from: string, to: string) {
    return this.http
      .get<NewsItem>(this.BASE_URL + 'everything?q=bitcoin&from=' + from + '&to=' + to + '&apiKey=' + this.API_KEY)
      .pipe(map((res: any) => res.articles));
  }
}