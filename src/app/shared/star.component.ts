import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'mh-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starPercent: string;

    ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 70px width
        this.starPercent = (this.rating * 70 / 5) + 'px';
    }
}
