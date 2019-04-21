import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';

import { AppServiceModule } from './services/app.service.module';
import { AppService } from './services/app.service';
import { CardComponent } from './card/card.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLeftComponent } from './header/header-left/header-left.component';
import { HeaderCenterComponent } from './header/header-center/header-center.component';
import { HeaderRightComponent } from './header/header-right/header-right.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MainComponent } from './khantribute/main/main.component';
import { KhantributeComponent } from './khantribute/khantribute.component';

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
        FeedbackComponent,
        MainComponent,
        KhantributeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
        AppServiceModule
    ],
    providers: [ AppService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
