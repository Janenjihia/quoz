import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote, } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
// export class QuoteDetailComponent implements OnInit {


//   @Input()
//   adduce!: Quotes; 

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



export class QuoteDetailsComponent implements OnInit {
  @Input()
  // added the exclamation as an assignment
  quoty!: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quoty.upvote+=1;
  }
  downvote(){
    this.quoty.downvote+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}