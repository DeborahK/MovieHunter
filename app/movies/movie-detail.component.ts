import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    templateUrl: 'app/movies/movie-detail.component.html',
    styleUrls: ['app/movies/movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Movie Detail';
    movie: IMovie;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _movieService: MovieService,
                private _router: Router,
                private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getMovie(id);
            }
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getMovie(id: number) {
        this._movieService.getMovie(id)
            .subscribe(
                (movie: IMovie) => this.movie = movie,
                (error: any) => this.errorMessage = <any>error);
    }

    onBack() {
        this._router.navigate(['/movies']);
    }
}
