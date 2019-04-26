import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { HeaderModule } from './header/header.module';
import { UserModule } from './user/user.module';
import { AppServiceModule } from './services/app.service.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { CardComponent } from './card/card.component';
import { ControlsComponent } from './controls/controls.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
   declarations: [
      AppComponent,
      ControlsComponent,
      CardComponent,
      OnboardingComponent,
      LeaderboardComponent,
      FeedbackComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      HeaderModule,
      UserModule,
      AppServiceModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
