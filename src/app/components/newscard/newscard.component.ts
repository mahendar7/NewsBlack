import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.scss']
})
export class NewscardComponent {
  @Input('data') data; // To get Input Data for the News-Card

  goToExternalPage(extrenalUrl: string) {
    window.location.href = extrenalUrl;
  }
}
