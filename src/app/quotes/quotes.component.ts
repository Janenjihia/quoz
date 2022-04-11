import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [

    new Quote (1,"I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou", "Jane", 0, 0),
    
    new Quote(2,"There is no greater agony than bearing an untold story inside you.",'Maya Angelou', "Jane", 0,0 ),

      new  Quote (3,"When someone shows you who they are believe them the first time.",'Maya Angelou' ,"Jane",0,0),

      new Quote (4, "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",'Maya Angelou', "Jane",0,0),

    
      new Quote(5, "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",'Maya Angelou',"Jane", 0,0),

    
      new Quote(6, "I can be changed by what happens to me. But I refuse to be reduced by it.", 'Maya Angelou', "Jane", 0, 0),

    
      new Quote(7, "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", 'Maya Angelou', "Jane", 0, 0),
    
  ]


  // Adding highlight logic
  
  // arr: Number [] = this.adduce.map(quote=>quote.upvote)
  // highest = Math.max(..this.arr)



get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index: number){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }



  constructor() { }

  ngOnInit():void{
  }

}
