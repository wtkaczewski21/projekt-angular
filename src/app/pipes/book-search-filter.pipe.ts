import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bookSearchFilter'
})
export class SearchFilterPipe implements PipeTransform {

    transform(
        value: { title: string, author: string }[],
        search: string
    ): { title: string, author: string }[] {
        if (value) {
            const regexp = new RegExp(search, 'i');
            const properties = Object.keys(value[0]);

            const filteredProps = properties.filter(p => p === 'title' || p === 'author')
            return [
                ...value.filter((item) => {
                    return filteredProps.some((property) => regexp.test(item[property]));
                })
            ]
        }
    }
}
