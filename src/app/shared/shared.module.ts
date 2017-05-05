import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { RangeValidator } from './range.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    StarComponent,
    RangeValidator
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    RangeValidator
  ]
})
export class SharedModule { }
