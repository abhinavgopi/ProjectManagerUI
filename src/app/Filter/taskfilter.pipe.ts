import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'taskSearch'
})

export class TaskSearchPipe implements PipeTransform {
    transform(items: any[], tasksearchName: string) {
        if (items && items.length && tasksearchName) {
            return items.filter(item => {
                if (tasksearchName && item.TaskName.toLowerCase().startsWith(tasksearchName.toLowerCase())) {
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