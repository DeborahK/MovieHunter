import { Component, OnInit } from '@angular/core';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    pageTitle: string = 'Movie List';
    listFilter: string = '';
    showImage: boolean = false;
    movies: IMovie[];
    errorMessage: string;

    constructor(private _movieService: MovieService) {
    }

    ngOnInit() { this.getMovies(); }

    getMovies() {
        this._movieService.getMovies()
            .subscribe(
                (movies: IMovie[]) => this.movies = movies,
                (error: any) => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
