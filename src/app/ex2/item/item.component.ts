import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-item',
    template: `
        <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
    `
})

export class ItemComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}