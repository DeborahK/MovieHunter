"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.moviesUrl = 'app/movies/movies.json';
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get(this.moviesUrl)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovie = function (id) {
        var _this = this;
        return this.http.get(this.moviesUrl)
            .map(function (res) { return _this.handleMap(res, id); })
            .do(function (data) { return console.log('Data: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MovieService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    MovieService.prototype.handleMap = function (res, id) {
        var data = res.json();
        var filtered = data.filter(function (m) { return m.movieId === id; });
        return filtered[0];
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map