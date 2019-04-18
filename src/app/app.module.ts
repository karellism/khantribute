import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ControlsComponent } from "./controls/controls.component";

import { AppServiceModule } from "./services/app.service.module";
import { AppService } from "./services/app.service";
import { CardComponent } from "./card/card.component";
import { OnboardingComponent } from "./onboarding/onboarding.component";
import { HeaderComponent } from './header/header.component';
import { HeaderLeftComponent } from './header/header-left/header-left.component';
import { HeaderCenterComponent } from './header/header-center/header-center.component';
import { HeaderRightComponent } from './header/header-right/header-right.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MainComponent } from './khantribute/main/main.component';
import { KhantributeComponent } from './khantribute/khantribute.component';

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
        HttpClientModule,
        FormsModule,
        AppServiceModule
    ],
    providers: [ AppService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
