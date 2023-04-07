import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  
  @Input() category: any;
  getBlogs:any;

  ngOnInit(): void {
    this.getBlogs = [    
      {id:1,desc :'Fundamental of javascript', image : "../../assets/images/Article_Image.png"},
      {id:2,desc :'Grid CSS make your life easier',  image : "../../assets/images/Article_Image_3.png"},
      {id:3,desc :'Make animated light mode and dark mode toggle with CSS',  image : "../../assets/images/Article_Image_2.png"},
      {id:4,desc :'Make tic tac toe games with react JS',  image : "../../assets/images/Article_Image_1.png"},
    ];
  }
}
