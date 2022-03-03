import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-structural-directives',
    template: `
    <h1>Structural Directives</h1>
    <h3>*ngIf</h3>
    <!-- Chỉ hiện thi ra thẻ h3 nếu user trên 13 tuổi:
    *ngIf="expression"
    true -> thẻ h3 thực thi
    false: h5 ko thực hiện
    -->
    <h5 *ngIf= "user.age >= 13; else noPG13">
        Bạn đã đủ tuổi xem phim: Avenger Endgame
    </h5>
    <!--
        Cách 1:
         <h5 *ngIf= "user.age < 13">
        Bạn CHƯA đủ tuổi để xem phim: Avenger Endgame
    </h5> -->

    <!-- 
    Cách 2    
    ng-template là 1 tag mà nội dung bên trong mặc định không dc hiện thị 
    Muốn dc hiển thị ta dùng code dể sử dụng template này bằng cách thêm #tênTemplate và gọi ở nơi cần dùng-->
    <ng-template #noPG13>
        <h5>
        Bạn CHƯA tuổi xem phim: Avenger Endgame
        </h5>
    </ng-template>

    <h3>*ngSwitch</h3>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'primary'" class="bg-primary">Primary</p>
        <p *ngSwitchCase="'success'" class="bg-success">Success</p>
        <p *ngSwitchCase="'danger'" class="bg-danger">Danger</p>
    </div>
    <h3>*ngFor</h3>
    <div class="container">
        <div class="row">
            <div class="col-sm-4" *ngFor="let movie of movies; index as idx">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{{idx+1}} - {{movie.name}}</h4>
                        <p class="card-text">{{movie.desc}}</p>
                    </div>
                </div>                
            </div>
        </div>
    </div>

    <h3>Use multiple directives : ng-container</h3>
    <div class="container">
        <div class="row">
            <div class="col-sm-4" *ngFor="let movie of movies; index as idx">
                <ng-container *ngIf="movie.id==1">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{{idx+1}} - {{movie.name}}</h4>
                        <p class="card-text">{{movie.desc}}</p>
                    </div>
                </div>    
                </ng-container>            
            </div>
        </div>
    </div>
    <h3>Kết hợp ng-template và ng-container</h3>
    <ng-template #alert>
        <div class="alert alert-danger">Something went wrong</div>
    </ng-template>
    <ng-container *ngTemplateOutlet="alert"></ng-container>
    <ng-container *ngTemplateOutlet="alert"></ng-container>


    `
})

export class StructuralDirectivesComponent implements OnInit {
    user = {
        name: "Ha",
        age: 10,
    };
    color: string = "success";
    movies = [
        { id: 1, name: "Haha", desc: "Haha hihi hoho huhu hehe" },
        { id: 2, name: "Hoho", desc: "Haha hihi hoho huhu hehe" },
        { id: 3, name: "Hehe", desc: "Haha hihi hoho huhu hehe" },
    ]

    constructor() { }

    ngOnInit() { }
}