import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-article-lits',
    template: `
    <h2>Article List</h2>
    <div class="container">
        <div class="row">
            <div class="col-sm-4" *ngFor="let article of articles">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{{article.title}}</h4>
                        <p class="card-text">{{article.desc}}</p>
                        <button 
                        class="btn btn-info" 
                        routerLink="/article/{{article.id}}">View Detail</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `
})

export class ArticleListComponent implements OnInit {
    articles:any[]=[
        {id: 1, title: "React", desc:"React vô đối"},
        {id: 2, title: "Angular", desc:"Angular vô đối"},
        {id: 3, title: "Vue", desc:"Vue vô đối"},
    ]
    constructor() { }

    ngOnInit() { }
}
