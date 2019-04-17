import { Component, OnInit } from '@angular/core';
import M from "materialize-css";
import { AppService } from "../../../services/app.service";

@Component({
  selector: 'languages-header',
  templateUrl: './languages-header.component.html',
  styleUrls: ['./languages-header.component.css']
})


export class LanguagesHeaderComponent implements OnInit {

    constructor(public appService: AppService) {}

    ngOnInit() {
         M.Dropdown.init(document.getElementById("languages-dropdown"), {
           // alignment: "left",
            constrainWidth: false
        });
    }
    setLang(i) {
         this.appService.setLang(i);
    }

}

/*


@Component({
    selector: "lang-dropdown",
    templateUrl: "./languages.component.html"
})
export class LangComponent implements OnInit {
    constructor(public appService: AppService) {}
    ngOnInit() {
        M.Dropdown.init(document.getElementById("lang-dropdown"), {
            constrainWidth: false
        });
    }
    setLang(i) {
        this.appService.setLang(i);
    }
}
*/