import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bookSearchFilter'
})
export class BookSearchFilterPipe implements PipeTransform {

    transform(
        value: { title: string; author: string }[],
        search: string
    ): { title: string; author: string }[] {
        if (value[0] !== undefined) {
            const regexp = new RegExp(search, 'i');
            const properties = Object.keys(value[0]);
            const filteredProperties = properties.filter(p => p === 'title' || p === 'author')
            return [
                ...value.filter((item) => {
                    return filteredProperties.some((property) => regexp.test(item[property]));
                })
            ]
        }
    }
}
