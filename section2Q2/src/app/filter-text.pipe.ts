import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterText'})
export class FilterTextPipe implements PipeTransform {

  transform(categories: string[], filterText: string): string[] {
    if (!categories) {
      return [];
    }
    if (!filterText) {
      return categories;
    }

    let newCategory = [];
    categories.forEach(el => {
      let lowerCaseEl = el.toLowerCase();
      if(lowerCaseEl.includes(filterText.toLowerCase())){
        newCategory.push(el);
      }
    })
    return newCategory;
  }


}