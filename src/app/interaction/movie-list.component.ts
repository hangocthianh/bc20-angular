import { Component, OnInit,OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-movie-list',
    template: `
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-4" *ngFor="let movie of movies">
                    <app-movie-item 
                        [movie]="movie" 
                        (onDelete)="handleDelete($event)">
                    </app-movie-item>
                </div>
            </div>
        </div>

    `
})

export class MovieListComponent implements OnInit, OnChanges {
    @Input() movieAdded:any=null;

    movies=[
        {id: 1, name: 'Avenger', desc: 'Endgame', img: 'assets/img/avenger.jpeg'},
        {id: 2, name: 'Avatar', desc: 'Av-a', img:'assets/img/Avatar.jpeg'},
        {id: 3, name: 'Spider Man', desc: 'No way home', img:'assets/img/spiderman.jpeg'},
    ]
    constructor() { }

    //lifecycle của angular, dc gọi sau khi angular khởi tạo xong các properties, directives, thường dùng để gọi API
    ngOnInit() { }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
        const {movieAdded}=changes;
        if(movieAdded.currentValue && movieAdded.currentValue!== movieAdded.previousValue){
            this.handleAdd(movieAdded.currentValue);
        }
    }

    handleDelete(movieID:number){
        this.movies=this.movies.filter((item)=>item.id!==movieID)
    }
    handleAdd(movie:any){
        this.movies=[...this.movies, movie];
    }
}