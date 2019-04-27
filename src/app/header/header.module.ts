import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { HeaderLeftComponent } from "./header-left/header-left.component";
import { HeaderCenterComponent } from "./header-center/header-center.component";
import { HeaderRightComponent } from "./header-right/header-right.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLeftComponent,
    HeaderCenterComponent,
    HeaderRightComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    HeaderComponent,
    HeaderLeftComponent,
    HeaderCenterComponent,
    HeaderRightComponent
  ]
})
export class HeaderModule {}
