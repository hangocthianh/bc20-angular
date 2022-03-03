// a-component: tạo nhanh component vs templateUrl
// a-component-inline: tạo nhanh component vs template

import { Component } from "@angular/core";

@Component({
    selector: 'app-demo'
    ,
    // templateUrl: './demo.component.html'
    template:`
        <h1 class="title">Demo Component HI</h1>
    `,
    // styleUrls: ['./demo.component.scss']
    styles:[
        `
        .title{
            color: #109;
        }
        `
    ]
})
export class DemoComponent { }