import { Component, OnInit } from '@angular/core';

type Student={
    name: string;
    email: string;
}

@Component({
    selector: 'app-data-binding',
    template: `
    <h1>DATA BINDING</h1>

    <!-- Interpolation -->
    <p>Hello: {{title}}</p>
    <p>Your name: {{student.name}}</p>
    <p>Your email: {{student.email}}</p>


    <!-- Property binding -->
    <div class="form-group">
      <label for="name">Name</label>
      <input 
      type="text" 
      id="name" 
      class="form-control" 
      [value]="student.name"
      [disabled]="isDisabled"
      />
    </div>

    <!-- Event - binding -->
    <button class="btn btn-success mt-2" (click)="toggleDisabled()">Disabled</button>

    <!-- Kết hợp property binding và event binding -->
    <div class="form-group">
      <label for="name">Address</label>
      <input 
      type="text" 
      id="name" 
      class="form-control" 
      [value]="address"
      (input)="onChangeAddress($event)"
      />
    </div>
    <p>Address {{address}}</p>


        <!-- Template variable -->
        <div class="form-group">
      <label for="name">Phone</label>
      <input 
      type="text" 
      id="name" 
      class="form-control"
      #phoneEl      
      />
      <button class="btn btn-success mt-3" (click)="onChangePhone(phoneEl.value)">Change Phone</button>
      <p>Phone: {{phone}}</p>
    </div>

    <!-- Two way binding : để sử dụng cần import FormsModule mới có thể sử dụng Two way binding -->
    <div class="form-group">
      <label for="name">Description</label>
      <input 
      type="text" 
      id="name" 
      class="form-control"
      [(ngModel)]="description"      
      />
    </div>
    <p>description: {{description}}</p>

    <div class="form-group">
      <label for="">Select color</label>
      <select class="form-control" id="" 
      [(ngModel)]="color">
        <option value="">chọn màu</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>
      <p>Color: {{color}}</p>
    </div>

    <!-- BÀI TẬP 4 -->
    <h3>BÀI TẬP 4</h3>
    <div class="form-group">
      <label for="">fullname</label>
      <input type="text" id="" class="form-control" #fullnameRef >
      <label for="">Email</label>
      <input type="text" id="" class="form-control" [(ngModel)]="user.email" >
      <button class="btn btn-info" (click)="onChangeFullName(fullnameRef.value)">Click</button>
    </div>
    <p>Full name: {{user.fullname}}</p>
    <p>Email: {{user.email}}</p>
    `
})

export class DataBindingComponent implements OnInit {
    // nơi khai báo các properties, methods
    title:string ="Trung tâm Cybersoft";
    student:Student={
        name: "Ha",
        email: "anhha@gmail.com",
    }
    isDisabled: boolean= false;
    address:string="";
    phone:string="";
    description: string="";
    color: string="";
    // BÀI TẬP 4
    user:any={
        fullname: "",
        email:"",
    };

    constructor() { }

    ngOnInit() { }

    toggleDisabled(){
        this.isDisabled = !this.isDisabled;
    }
    onChangeAddress(evt:Event){
        if(evt.target instanceof HTMLInputElement){
          // instanceof: Các toán từ instanceof cho phép để kiểm tra xem một đối tượng thuộc về một lớp nhất định nào vậy. Nó cũng có tính kế thừa.
            this.address = evt.target.value
        }

    }
    onChangePhone(value:string){
        this.phone = value;
    }
    onChangeFullName(value:string){
        this.user.fullname=value;
    }
}