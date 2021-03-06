import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  quoted = new Quotes(0,"","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quotes>();

  addQuote(){
this.add.emit(this.quoted);
this.quoted = new Quotes(0,"","","",new Date(),0,0);
  }
  constructor() { }

  ngOnInit(){
  }

}