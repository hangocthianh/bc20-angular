import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-attribute-directives',
    template: `
    <h1>Attribute Directives</h1>
    <h2>Class binding</h2>
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <a 
        class="nav-link" 
        [class.active]="selectedTab ==='home'" 
        (click)="onSelect('home')" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a 
        class="nav-link" 
        [class.active]="selectedTab ==='about'" (click)="onSelect('about')" href="#">About</a>
      </li>
      <li class="nav-item">
        <a 
        class="nav-link" 
        [class.active]="selectedTab ==='news'" (click)="onSelect('news')" href="#">News</a>
      </li>
    </ul>

    <!-- Ngoài ra có thể viết []="clasExpr" 
    classExpr có 3 dạng string, array string,object:
    - string: "class-a class-b class-c"
    - array: ["class-a", "condition? 'class-b':'class-c'"] 
    - object:{'class-a':conditionA, 'class-b': conditionB}-->

    <h3>Style binding</h3>
    <!-- <div [style.property]="expression" ></div> 
expression trả về giá trị dạng: number, string, null, undefined-->
<div style= "height:300px; width: 200px" [style.background-image]="'url('+imgUrl + ')'"></div>
    `
})

export class AttributeDirectivesComponent implements OnInit {
    selectedTab:string = 'home';
    imgUrl: string='https://picsum.photos/200/300'
    constructor() { }

    ngOnInit() { }
    onSelect(value: string){
        this.selectedTab=value;
    }
}