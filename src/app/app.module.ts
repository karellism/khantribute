import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { KhantributeModule } from './khantribute/khantribute.module';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';

import { AppServiceModule } from './services/app.service.module';

import { CardComponent } from './card/card.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLeftComponent } from './header/header-left/header-left.component';
import { HeaderCenterComponent } from './header/header-center/header-center.component';
import { HeaderRightComponent } from './header/header-right/header-right.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { SharedModule } from './shared/shared.module';
@NgModule({
    declarations: [
        AppComponent,
        ControlsComponent,
        CardComponent,
        OnboardingComponent,
        HeaderComponent,
        HeaderLeftComponent,
        HeaderCenterComponent,
        HeaderRightComponent,
        LeaderboardComponent,
        FeedbackComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
        KhantributeModule,
        AppServiceModule
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
