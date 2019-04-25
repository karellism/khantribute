import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';

import { HeaderComponent } from './header/header.component';
import { LanguagesHeaderComponent } from './header/languages-header/languages-header.component';
import { MenuHeaderComponent } from './header/menu-header/menu-header.component';

import { ControlsComponent } from './controls/controls.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

import { KhantributeRoutingModule } from './khantribute-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KhantributeRoutingModule
  ],
  declarations: [
    CardComponent,
    HeaderComponent,
    LanguagesHeaderComponent,
    MenuHeaderComponent,
    ControlsComponent,
    OnboardingComponent
  ]
})
export class KhantributeModule {}
