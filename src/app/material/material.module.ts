import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';

const MaterialComponents  = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatMenuModule
];

@NgModule({
  declarations: [ MaterialComponents ],
  imports: [ MaterialComponents ]
})
export class MaterialModule { }
