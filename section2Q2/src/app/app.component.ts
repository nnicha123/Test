import { Component,OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { GetCategoriesService } from './get-categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterText:string;
  categories:string[];
  constructor(private getCategoriesService:GetCategoriesService){
    this.initCategories();
  }

  private initCategories(){
    this.getCategoriesService.getCategories()
    .pipe(
      take(1),
      map(categories => this.categories = categories)
      ).subscribe();
  }  


}
