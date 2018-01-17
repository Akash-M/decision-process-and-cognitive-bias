import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BiasComponent } from './bias/bias.component';
import { HomeComponent } from './home/home.component'
import { DecisionProcessComponent } from './decision-process/decision-process.component';
import { FeedbackComponent } from "./feedback/feedback.component";

const routes: Routes =[
    { path: 'bias', component: BiasComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'feedback', component: FeedbackComponent, pathMatch: 'full' },
    { path: 'decisionprocess', component: DecisionProcessComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
