import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.services';
import { GithubService } from '../services/github.services';

@Component({
  selector: 'githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubService) { 
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => {
        this.followers = followers;
      });

  }

}
