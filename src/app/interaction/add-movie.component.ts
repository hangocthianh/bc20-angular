import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-movie',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-sm-5">
                <div class="form-group">
                  <label>Mã phim</label>
                  <input type="text" class="form-control" [(ngModel)]="form.id" >
                </div>
                <div class="form-group">
                  <label>Tên phim</label>
                  <input type="text" class="form-control" [(ngModel)]="form.name" >
                </div>
                <div class="form-group">
                  <label>Mô tả</label>
                  <input type="text" class="form-control" [(ngModel)]="form.desc" >
                </div>
                <div class="form-group">
                  <label>Hình ảnh</label>
                  <input type="text" class="form-control" [(ngModel)]="form.img" >
                </div>
                <button class="btn btn-info" (click)="handleAddMovie()" >Thêm phim</button>
            </div>
        </div>
    </div>
    `
})

export class AddMovieComponent implements OnInit {
    @Output() addMovie = new EventEmitter;

    form = {
        id:"",
        name:"",
        desc:"",
        img:"",
    }

    constructor() { }

    ngOnInit() { }
    
    handleAddMovie(){
        this.addMovie.emit({...this.form})
    }
}