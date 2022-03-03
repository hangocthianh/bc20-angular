import { Component } from '@angular/core';

@Component({
  // selector: tên component sử dựng trong file html
  selector: 'app-root',
  // liên kết file htm với component
  templateUrl: './app.component.html',
  // liên kế các files: css/scss... với components
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bc20-angular';
}