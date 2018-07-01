import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'titlebox',
  templateUrl: './titlebox.component.html',
  styleUrls: ['./titlebox.component.css']
})
export class TitleboxComponent implements OnInit {
  movieTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
