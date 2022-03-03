import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-movie-item',
    template: `
        <div class="card">
            <img class="card-img-top" [src]="movie.img" alt="">
            <div class="card-body">
                <h4 class="card-title">{{movie.name}}</h4>
                <p class="card-text">{{movie.desc}}</p>
                <button class="btn btn-danger" (click)="handleDelete()">
                    Delete
                </button>
            </div>
        </div>
    `
})

export class MovieItemComponent implements OnInit {
    // phải khai báo input mới có thể sử dụng dữ liệụ từ component cha truyền xuống
    @Input() movie: any = null;
    // Để truyền dữ liệu từ component con lên component cha thì component con cần phải bắn/emit ra 1 event.
    // Output và EventEmitter: ĐỊnh nghĩa một event, để khi emit event component cha có thể lắng nghe dc
    @Output() onDelete = new EventEmitter()
    constructor() { }

    ngOnInit() { }

    handleDelete(){
        // truyền id của phim muốn xoa lên component cha
        //kích hoạt event onDelete và truyền kèm 1 value là id của movie
        this.onDelete.emit(this.movie.id)
    }
}