import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { FeedbackComponent } from "./feedback/feedback.component";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "leaderboard", component: LeaderboardComponent },
  { path: "feedback", component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
