export class Quotes {
  showInfo: boolean;
  completeDate!: Date;
  constructor(public id:number,public quote:string,public author:string, public name: string, public datePosted: Date, public upvote:number, public downvote:number, ){
      this.showInfo=false;
    }
}

// git