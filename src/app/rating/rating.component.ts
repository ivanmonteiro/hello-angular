import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  isStarred:boolean;
  
  constructor() { }

  ngOnInit() {
  }

  toggleStar() {
    this.isStarred = !this.isStarred;
  }

}
