import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AdvantagesComponent} from "./pages/advantages/advantages.component";
import {FeedbackComponent} from "./pages/feedback/feedback.component";
import {RegistrationComponent} from "./pages/registration/registration.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'advantages', component: AdvantagesComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'registration', component: RegistrationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
