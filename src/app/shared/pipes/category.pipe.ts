import { Pipe, PipeTransform } from '@angular/core';
import { CATEGORIES } from 'src/app/core/constants/item.constants';

@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
  categoriesMap = CATEGORIES;

  transform(category: string): string {
    return this.categoriesMap[category];
  }
}
