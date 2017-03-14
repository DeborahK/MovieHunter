import { Component, OnInit } from '@angular/core';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    templateUrl: './app/movies/movie-list.component.html',
    styleUrls: ['./app/movies/movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    pageTitle: string = 'Movie List';
    listFilter: string = '';
    showImage: boolean = false;
    movies: IMovie[];
    errorMessage: string;

    constructor(private movieService: MovieService) { }

    ngOnInit() { this.getMovies(); }

    getMovies() {
        this.movieService.getMovies()
            .subscribe(
                (movies: IMovie[]) => this.movies = movies,
                (error: any) => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
