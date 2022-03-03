import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list.component';

@Component({
    selector: 'app-interaction',
    template: `
    <h1>Interaction</h1>
    <app-add-movie (addMovie)="handleAddMovie($event)"></app-add-movie>
    <!-- <app-movie-list [movieAdded]="movieAdded"></app-movie-list> -->
    <app-movie-list #movieList></app-movie-list>

    
    `
})

export class InteractionComponent implements OnInit {
    //cách 2: dùng ViewChild để gọi tới method của component con
    @ViewChild('movieList') movieListComp!: MovieListComponent;
    //movieListComp!: any;
    //hoặc movieListComp!: MovieListComponent;: để xuống gọi hàm đến dưới dc gợi ý hàm ở component con

    // cách 1 truyền props
    movieAdded:any=null;
    constructor() { }

    ngOnInit() { }

    handleAddMovie(movie:any){
        //cách 1: 
        // this.movieAdded=movie;
        //cách 2: từ component cha gọi trực tiếp tới 1 method của component thông qua kĩ thuật ViewChild
        this.movieListComp.handleAdd(movie);
    }
}