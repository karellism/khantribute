import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css";
import { AppService } from "../../services/app.service";

@Component({
  selector: "app-header-right",
  templateUrl: "./header-right.component.html",
  styleUrls: ["./header-right.component.css"]
})
export class HeaderRightComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit() {
    M.Dropdown.init(document.getElementById("user-dropdown"), {
      alignment: "right",
      constrainWidth: false
    });
  }
  changeNick() {
    this.appService.setNickname(
      prompt("What would you like your new nickname to be?")
    );
  }
}
