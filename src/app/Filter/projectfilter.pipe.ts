import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'projectSearch'
})

export class ProjectSearchPipe implements PipeTransform {
    transform(items: any[], projectsearchName: string) {
        if (items && items.length && projectsearchName) {
            return items.filter(item => {
                if (projectsearchName && item.ProjectName.toLowerCase().startsWith(projectsearchName.toLowerCase())) {
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
