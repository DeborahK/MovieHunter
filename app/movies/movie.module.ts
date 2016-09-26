import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieFilterPipe } from './movie-filter.pipe';
import { MovieService } from './movie.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'movies', component: MovieListComponent },
      { path: 'movie/:id', component: MovieDetailComponent }
    ])
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieFilterPipe
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule {}
