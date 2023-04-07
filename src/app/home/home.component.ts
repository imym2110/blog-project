import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getcategory:any;
  
  ngOnInit(): void {
    this.getcategory = [
      {title: "Featured Articles"},
      {title: "CSS"},
      {title: "Javascript"},
      {title: "React JS"}
    ];
  }
}
