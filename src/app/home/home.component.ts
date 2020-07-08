import { Newsservice } from './../services/newsservice.service';
import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../models/newsItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsItems: NewsItem[];
  Today: any; // To disable previous dates in Date Picker

  // Country Selection
  countries = [
    { name: "India", val: 'in' },
    { name: "USA", val: 'us' }
  ];
  selectedCountry: string = 'in';

  // Date Selection
  fromDate: string;
  toDate: string;

  constructor(private newsService: Newsservice) {
    this.Today = new Date().toISOString().split("T")[0];
  }

  ngOnInit(): void {
    this.getNews();
  }

  // To get All News
  getNews() {
    this.newsService.getAll(this.selectedCountry).subscribe(
      (res) => this.newsItems = res,
      (err) => console.log(err)
    )
  }

  // To get News by Passing From Date and To Date
  getNewsByDate() {
    this.newsService.getByDate(this.fromDate, this.toDate).subscribe(
      (res) => this.newsItems = res,
      (err) => console.log(err)
    )
  }

}
