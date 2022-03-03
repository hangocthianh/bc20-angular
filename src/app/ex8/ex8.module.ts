import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ex8Component } from './ex8.component';
import { SeatListComponent } from './seat-list.component';
import { SeatComponent } from './seat.component';
import { SelectedComponent } from './selected.component';
const routes: Routes=[
    {path:"", component: Ex8Component}
    // khi đã gọi component ở đây không cần export ở dưới
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    // imports: [CommonModule] để sử dụng các directives của angular: ngIf, ngFor...
    exports: [
        // Ex8Component
    ],
    declarations: [
        Ex8Component,
        SeatComponent,
        SeatListComponent,
        SelectedComponent,
    ],
})
export class Ex8Module { }
