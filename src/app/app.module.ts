import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Router } from "@angular/router";

/* App Root */
import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { ControlsComponent } from "./controls/controls.component";
import { OnboardingComponent } from "./onboarding/onboarding.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { FeedbackComponent } from "./feedback/feedback.component";
/* Feature Modules */

import { HeaderModule } from "./header/header.module";
import { UserModule } from "./user/user.module";
import { MaterialModule } from "./material/material.module";
import { AppServiceModule } from "./services/app.service.module";

/* Routing Module */
import { AppRoutingModule } from "./app-routing.module";

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
    MaterialModule,
    FormsModule,
    HeaderModule,
    UserModule,
    AppServiceModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
