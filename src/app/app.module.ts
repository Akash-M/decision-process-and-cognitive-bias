import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { TreeModule } from 'ng2-tree';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DecisionProcessComponent } from './decision-process/decision-process.component';
import { HomeComponent } from './home/home.component';
import { BiasComponent } from './bias/bias.component';
import { AboutTheTopicComponent } from './about-the-topic/about-the-topic.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    DecisionProcessComponent,
    HomeComponent,
    BiasComponent,
    AboutTheTopicComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
