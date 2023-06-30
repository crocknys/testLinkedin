import { Component, OnInit } from '@angular/core';
import { likedinService } from './linkedin-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public textToCheck:any = ""
  public hashtagList:string[] = []
  public followerCount = 0

  constructor(private service: likedinService){}

  ngOnInit(): void {

  }

  checkValue() {

    let textWords: string[] = this.textToCheck.split(/\s+/)
    this.hashtagList = []

    textWords.forEach((element) => {
      if(element.indexOf("#") > -1 && element != "##") {
        this.hashtagList.push(element)
      }
    });;

    this.checkFollowerCount();
  }

  reset() {
    this.textToCheck = ""
    this.hashtagList = []
    this.followerCount = 0
  }

  checkFollowerCount() {
    this.hashtagList.forEach( x => {
      console.log("linkedin api call for: " + x)
      //appel à linkedin.
    })
  }



}
