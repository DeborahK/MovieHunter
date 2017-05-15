import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from './movie';

@Pipe({
    name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

    transform(value: IMovie[], filterBy: string): IMovie[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((movie: IMovie) =>
            movie.title.toLocaleLowerCase().search(filterBy) !== -1) : value;
    }
}
