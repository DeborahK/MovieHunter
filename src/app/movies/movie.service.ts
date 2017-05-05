import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IMovie } from './movie';

@Injectable()
export class MovieService {
    private moviesUrl = '/api/movies/movies.json';

    constructor(private http: Http) { }

    getMovies(): Observable<IMovie[]> {
        return this.http.get(this.moviesUrl)
            .map((res: Response) => <IMovie[]> res.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    getMovie(id: number): Observable<IMovie> {
        return this.http.get(this.moviesUrl)
            .map((res: Response) => this.handleMap(res, id))
            .do(data => console.log('Data: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private handleMap(res: any, id: number) {
        let data = <IMovie[]> res.json();
        // Return an initialized object
        if (id === 0) {
            return {
                'approvalRating': null,
                'description': '',
                'director': '',
                'imageurl': '',
                'movieId': 0,
                'mpaa': '',
                'price': null,
                'releaseDate': '',
                'starRating': null,
                'title': ''
            };
        }
        let filtered = data.filter(m => m.movieId === id);
        return <IMovie> filtered[0];
    }
}
