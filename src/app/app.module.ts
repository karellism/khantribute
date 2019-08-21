import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Modules */

import { SharedModule } from './shared//shared.module';

/* App Root */
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ControlsComponent } from './controls/controls.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
/* Feature Modules */

import { HeaderModule } from './header/header.module';
import { UserModule } from './user/user.module';
import { MaterialModule } from './material/material.module';
import { AppServiceModule } from './services/app.service.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    CardComponent,
    OnboardingComponent,
    LeaderboardComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HeaderModule,
    UserModule,
    AppServiceModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
