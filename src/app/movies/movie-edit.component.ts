import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { RangeValidator } from '../shared/range.directive';

@Component({
    templateUrl: './movie-edit.component.html'
})
export class MovieEditComponent implements OnInit {
    pageTitle: string = 'Edit Movie';
    movie: IMovie;
    errorMessage: string;

    constructor(private _movieService: MovieService,
        private _router: Router,
        private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getMovie(id);
            }
        );
    }

    getMovie(id: number) {
        this._movieService.getMovie(id)
            .subscribe(
            movie => this.onMovieRetrieved(movie),
            error => this.errorMessage = <any>error);
    }

    onMovieRetrieved(movie: IMovie) {
        this.movie = movie;
        if (this.movie.movieId === 0) {
            this.pageTitle = 'Add Movie (Template-driven)';
        } else {
            this.pageTitle = `Edit Movie (Template-driven): ${this.movie.title}`;
        }
    }

    saveMovie(editForm: NgForm) {
        console.log(editForm);
        if (editForm.dirty && editForm.valid) {
            alert(`Movie: ${JSON.stringify(editForm.value)}`);
        }
    }
}
