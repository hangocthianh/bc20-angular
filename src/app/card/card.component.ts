import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
        <div class="card">
            <div class="card-header">
            <ng-content select="[slot='header']"></ng-content>
                <!-- Product -->
            </div>
            <div class="card-body">
                
                <ng-content select="[slot='body']"></ng-content>
            </div>
            <div class="card-footer text-muted">
            <ng-content select="[slot='footer']"></ng-content>
                <!-- Add to cart -->
            </div>
        </div>
    
    `
})

export class CardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}