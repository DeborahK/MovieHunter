import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Movie Detail';
    movie: IMovie;
    errorMessage: string;
    private sub: Subscription;

    constructor(private movieService: MovieService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
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
        this.movieService.getMovie(id)
            .subscribe(
                (movie: IMovie) => this.movie = movie,
                (error: any) => this.errorMessage = <any>error);
    }

    onBack() {
        this.router.navigate(['/movies']);
    }
}
