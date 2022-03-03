import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-seat',
    template: `
        <button 
            class="seat btn btn-secondary"
            [class]="{
                'bg-danger':seat.booked,
                'bg-success': isSelected
            }"
            [disabled]="seat.booked"
            (click)="handleSelected()"
        >
        {{seat.name}}
        </button>
    `,
    styles:[
        `
        .seat{
            width: 70px;
            height: 70px;
            margin: 5px;
        }
        `
    ]
})

export class SeatComponent implements OnInit {
    @Input() seat:any={};
    // biến dùng dể xác định ghế có đang dc chọn hay không
    isSelected:boolean=false;
    @Output() onSelect = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    handleSelected(){
        // B1: thay đổi trang thái của ghế
        this.isSelected=!this.isSelected;
        // truyền sự thay đổi này lên component cha
        this.onSelect.emit({...this.seat, isSelected:this.isSelected});
    }
}