import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-article-detail',
    template: `
    <h2>Article Detail</h2>
    `
})

export class ArticleDetailComponent implements OnInit {
    articleID: string='';
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params);
        this.articleID=this.activatedRoute.snapshot.params['id']; 
        
        // dùng this.articleID để gọi API
    }
}