import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-index-content',
    template: `
    
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <h1>What We Do</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum consequuntur iste odit
                    doloribus fugiat,
                    qui repellendus tenetur unde ex ad laudantium quibusdam. Atque, voluptatem doloribus eaque
                    consequatur
                    praesentium blanditiis?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum consequuntur iste odit
                    doloribus fugiat,
                    qui repellendus tenetur unde ex ad laudantium quibusdam. Atque, voluptatem doloribus eaque
                    consequatur
                    praesentium blanditiis?</p>
            </div>
            <div class="col-sm-4">
                <h1>Contact US</h1>
                <p>CyberSoft</p>
                <p>Su Van Hanh, quận 10, Tp.HCM</p>
                <p>website: cybersoft.edu.vn</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <!-- item -->
                <app-item></app-item>
            </div>
            <div class="col-sm-4">
                <!-- item -->
                <app-item></app-item>
            </div>
            <div class="col-sm-4">
                <!-- item -->
                <app-item></app-item>
            </div>
        </div>
    </div>
    `
})

export class IndexContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
} 