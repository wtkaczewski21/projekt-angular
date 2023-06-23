import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerSearchFilter'
})
export class CustomerSearchFilterPipe implements PipeTransform {

  transform(
    value: { username: string; firstName: string; lastName: string }[],
    search: string
  ): { username: string; firstName: string; lastName: string }[] {
    if (value) {
      const regexp = new RegExp(search, 'i');
      const properties = Object.keys(value[0]);
      return [
        ...value.filter((item) => {
          return properties.some((property) => regexp.test(item[property]));
        })
      ]
    }
  }
}
