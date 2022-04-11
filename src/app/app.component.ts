import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: any;

  addNewQuote(quote: any) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate)
    this.quote.push(quote);
  }
  // title = 'quotes';
}
