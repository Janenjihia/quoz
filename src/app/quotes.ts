export class Quotes {
  showInfo: boolean;
  datePosted!: string | number | Date;
  completeDate!: Date;
  constructor(public id:number,public quote:string,public author:string, public name: string, public datePosted: Date, public upvote:number, public downvote:number, ){
      this.showInfo=false;
    }
}

// git