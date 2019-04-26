import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { HeaderLeftComponent } from './header-left/header-left.component';
import { HeaderCenterComponent } from './header-center/header-center.component';
import { HeaderRightComponent } from './header-right/header-right.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLeftComponent,
    HeaderCenterComponent,
    HeaderRightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeaderLeftComponent,
    HeaderCenterComponent,
    HeaderRightComponent
  ]
})
export class HeaderModule { }
