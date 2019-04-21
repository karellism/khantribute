import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { LanguagesHeaderComponent } from './header/languages-header/languages-header.component';
import { MenuHeaderComponent } from './header/menu-header/menu-header.component';
import { ControlsComponent } from './controls/controls.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const khantributeRoutes: Routes = [
  { path: 'header', redirectTo: '/header' },
  { path: 'card', redirectTo: '/card' },
  { path: 'controls', redirectTo: '/controls' },
  { path: 'onboarding', redirectTo: '/onboarding' }
];

@NgModule({
  imports: [
    RouterModule.forChild(khantributeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class KhantributeRoutingModule { }

