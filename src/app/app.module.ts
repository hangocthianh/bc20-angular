import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from './Demo/demo.component';
import { DemoCliComponent } from './demo-cli/demo-cli.component';
// import { HomeModule } from './home/home.module';
import { Ex2Module } from './ex2/ex2.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { CardComponent } from './card/card.component';
import { InteractionModule } from './interaction/interaction.module';
import { Ex8Module } from './ex8/ex8.module';
import { ArticleModule } from './article/article.module';
const routes: Routes=[
  {path:"",component:DemoComponent},
  {path:"data-binding", component: DataBindingComponent},
  {path:'structural-directives', component: StructuralDirectivesComponent},
  {path:'attribute-directives', component: AttributeDirectivesComponent},
  {path:'ex-2', loadChildren:()=>Ex2Module},
  // khi đã loadChildren Ex2Module rồi thì không cần import Ex2Module ở dưới
  {path:"ex-8", loadChildren:()=>Ex8Module},
  {path:"article", loadChildren:()=>ArticleModule}

]

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoCliComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    CardComponent,
  ],
  imports: [
    // module của Angular
    BrowserModule,
    FormsModule,
    // chỉ duy nhất ở app.module.ts mới gọi RouterModule.forRoot, đây là link gốc
    RouterModule.forRoot(routes),
    
    //module tự định nghĩa
    // HomeModule,
    //Ex2Module,
    InteractionModule,
    // Ex8Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
