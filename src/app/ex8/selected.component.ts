import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-selected',
    template: `
        <div>
            <h3>Danh sách ghế đang chọn ({{selectedSeat.length}})</h3>
            <p *ngFor="let seat of selectedSeat">
                Ghế: {{seat.name}} - {{seat.price}}
                <a class="text-danger" (click)="handleRemove(seat.id)">[Hủy]</a>
                <!-- href="javascript:void()": click thẻ a :ko làm gì -->
            </p>
        </div>
    `
})

export class SelectedComponent implements OnInit {
    @Output() onRemove= new EventEmitter();
    selectedSeat:any[]=[];
    constructor() { }

    ngOnInit() { }
    handleSelect(seat:any){
        if(seat.isSelected){
            this.selectedSeat=[...this.selectedSeat,seat]
        } else{
            this.selectedSeat=this.selectedSeat.filter((item)=>item.id!==seat.id);
        }
    }
    handleRemove(seatID:number){
        // B1: xóa khỏi mảng selectedSeat
        this.selectedSeat = this.selectedSeat.filter((item)=>item.id!==seatID);
        //B2: truyền seatID lên comp cha
        this.onRemove.emit(seatID);

    }

}