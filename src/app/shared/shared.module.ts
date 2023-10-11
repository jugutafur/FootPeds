import { NgModule } from '@angular/core';

import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { CommonModule } from '@angular/common';
import { BannerComponent } from './componentes/banner/banner.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BannerComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BannerComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule { }
