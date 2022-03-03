// a-module: khợi tạo nhanh cú pháp module
import { NgModule } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { FooterDemoComponent } from './footer/footer.component';
import { HeaderDemoComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
    ],
    // tac cần export để bên ngoài có thể sử dụng các component của module này
    exports: [
        // HeaderDemoComponent, 
        // FooterDemoComponent, 
        // SidebarComponent, 
        // ContentComponent,
    ],
    declarations: [
        // HeaderDemoComponent, 
        // FooterDemoComponent, 
        // SidebarComponent, 
        // ContentComponent,
    ],
    providers: [],
})
export class HomeModule { }
