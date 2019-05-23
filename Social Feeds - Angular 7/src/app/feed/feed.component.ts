import { Component, OnInit } from '@angular/core';
import { Feed } from '../model/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() {
    this.feedList = [ 
      {"summary": "this is a sample feed", "postedBy": "gaurav tak", "postedDateTime": "Mar 24 2019"},
      {"summary": "this is a sample feed", "postedBy": "gaurav tak", "postedDateTime": "Mar 24 2019"},
      {"summary": "this is a sample feed", "postedBy": "gaurav tak", "postedDateTime": "Mar 24 2019"},
   ]
   }

  feedList: Feed[] = [];

  ngOnInit() {
  }

}
