import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list.component';
import { ArticleDetailComponent } from './article-detail.component';
const routes: Routes=[
    {path:"",component:ArticleListComponent},
    {path:":id", component:ArticleDetailComponent}
]


@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [ArticleListComponent, ArticleDetailComponent],
})
export class ArticleModule { }
