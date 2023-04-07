import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss'],
  providers: [DatePipe]
})
export class BlogGridComponent {
  myDate = new Date();
  constructor(private datePipe: DatePipe) {
    this.datePipe.transform(this.myDate, 'dd/mm/yyyy');
    console.log(this.myDate);
  }

  @Input() blogs : any;
}
