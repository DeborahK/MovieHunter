import { Component, OnInit } from '@angular/core';

import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { MovieParameterService } from 'app/movies/movie-parameter.service';

@Component({
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    pageTitle: string = 'Movie List';
    movies: IMovie[];
    errorMessage: string;

    get listFilter() {
        return this.movieParameterService.filterBy;
    }
    set listFilter(value: string) {
        this.movieParameterService.filterBy = value;
    }

    get showImage() {
        return this.movieParameterService.displayPosters;
    }
    set showImage(value: boolean) {
        this.movieParameterService.displayPosters = value;
    }

    constructor(private movieService: MovieService,
                private movieParameterService: MovieParameterService) { }

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
