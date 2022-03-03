import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { SeatComponent } from './seat.component';

@Component({
    selector: 'app-seat-list',
    template: `

    <div class="row">
        <div class="col-sm-3" *ngFor="let seat of seatList">
            <app-seat 
            #seatComp
            [seat]="seat" 
            (onSelect)="onSelect.emit($event)"
            ></app-seat>
        </div>
    </div>
    
    `
})

export class SeatListComponent implements OnInit {
    // ViewChildren: để truyền xuống cho nhiều Component con
    @ViewChildren('seatComp') seatComps!: QueryList<SeatComponent>

    @Input() seatList:any[]=[];
    @Output() onSelect = new EventEmitter();
    constructor() { }

    ngOnInit() { }
    handleRemove(seatID:number){
        this.seatComps.forEach((item:SeatComponent)=>{
            // duyệt mảng ghế để kiểm tra xem ghế nào có id giống ghế bị hủy từ đó đổi isSelected để đổi màu cho ghế
            if(item.seat.id===seatID){
                item.isSelected= false;
            }
        })
    }
}