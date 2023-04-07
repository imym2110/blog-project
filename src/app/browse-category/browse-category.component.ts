import { Component } from '@angular/core';

@Component({
  selector: 'app-browse-category',
  templateUrl: './browse-category.component.html',
  styleUrls: ['./browse-category.component.scss']
})
export class BrowseCategoryComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
