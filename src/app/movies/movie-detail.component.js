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
var router_1 = require('@angular/router');
var movie_service_1 = require('./movie.service');
var MovieDetailComponent = (function () {
    function MovieDetailComponent(movieService, router, route) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
        this.pageTitle = 'Movie Detail';
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getMovie(id);
        });
    };
    MovieDetailComponent.prototype.getMovie = function (id) {
        var _this = this;
        this.movieService.getMovie(id)
            .subscribe(function (movie) { return _this.movie = movie; }, function (error) { return _this.errorMessage = error; });
    };
    MovieDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/movies']);
    };
    MovieDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './app/movies/movie-detail.component.html',
            styleUrls: ['./app/movies/movie-detail.component.css']
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService, router_1.Router, router_1.ActivatedRoute])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map