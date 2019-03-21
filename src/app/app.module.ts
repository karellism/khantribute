import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LangComponent } from "../languages/languages.component";
import { UserComponent } from "../user/user.component";
import { ControlsComponent } from "../controls/controls.component";
import { HttpClientModule } from "@angular/common/http";
import { AppServiceModule } from "../services/app.service.module";
import { AppService } from "../services/app.service";
import { CardComponent } from "../card/card.component";
import { OnboardingComponent } from "../onboarding/onboarding.component";
import "hammerjs";
import { HeaderComponent } from './header/header.component';
import { HeaderLeftComponent } from './header/header-left/header-left.component';
import { HeaderCenterComponent } from './header/header-center/header-center.component';
import { HeaderRightComponent } from './header/header-right/header-right.component';

@NgModule({
    declarations: [
        AppComponent,
        LangComponent,
        UserComponent,
        ControlsComponent,
        CardComponent,
        OnboardingComponent,
        HeaderComponent,
        HeaderLeftComponent,
        HeaderCenterComponent,
        HeaderRightComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppServiceModule
    ],
    providers: [ AppService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
