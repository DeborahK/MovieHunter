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
var movie_service_1 = require('./movie.service');
var MovieListComponent = (function () {
    function MovieListComponent(movieService) {
        this.movieService = movieService;
        this.pageTitle = 'Movie List';
        this.listFilter = '';
        this.showImage = false;
    }
    MovieListComponent.prototype.ngOnInit = function () { this.getMovies(); };
    MovieListComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies()
            .subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.errorMessage = error; });
    };
    MovieListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    MovieListComponent = __decorate([
        core_1.Component({
            templateUrl: './app/movies/movie-list.component.html',
            styleUrls: ['./app/movies/movie-list.component.css']
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map