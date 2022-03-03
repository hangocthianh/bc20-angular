import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex2Component } from './ex2.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { IndexComponent } from './index/index.component';
import { ItemComponent } from './item/item.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes=[
    {path:"",component:Ex2Component} //path ở đây mình để trỗng do nó đã tự nối chuỗi từ link gốc rồi : link-gốc/ex-2/""
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        Ex2Component,
    ],
    declarations: [
        Ex2Component,
        HeaderComponent,
        FooterComponent,
        IndexComponent,
        IndexContentComponent,
        ItemComponent,
        SliderComponent,
    ],
})
export class Ex2Module { }
