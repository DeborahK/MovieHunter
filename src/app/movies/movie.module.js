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
var shared_module_1 = require('../shared/shared.module');
var movie_list_component_1 = require('./movie-list.component');
var movie_detail_component_1 = require('./movie-detail.component');
var movie_filter_pipe_1 = require('./movie-filter.pipe');
var movie_service_1 = require('./movie.service');
var MovieModule = (function () {
    function MovieModule() {
    }
    MovieModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild([
                    { path: 'movies', component: movie_list_component_1.MovieListComponent },
                    { path: 'movies/:id', component: movie_detail_component_1.MovieDetailComponent }
                ])
            ],
            declarations: [
                movie_list_component_1.MovieListComponent,
                movie_detail_component_1.MovieDetailComponent,
                movie_filter_pipe_1.MovieFilterPipe
            ],
            providers: [
                movie_service_1.MovieService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MovieModule);
    return MovieModule;
}());
exports.MovieModule = MovieModule;
//# sourceMappingURL=movie.module.js.map