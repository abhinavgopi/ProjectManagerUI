import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'userSearch'
})

export class UserSearchPipe implements PipeTransform {
    transform(items: any[], firstNameSearch: string) {
        if (items && items.length && firstNameSearch) {
            return items.filter(item => {
                if (firstNameSearch && item.FirstName.toLowerCase().startsWith(firstNameSearch.toLowerCase())) {
                    return true;
                }
                return false;
            })
        }
        else {
            return items;
        }
    }
}
