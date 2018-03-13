import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as AngularMaterialModules from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './indepotent/header/header.component';
import { QuestionComponent } from './indepotent/question/question.component';
import { AnswerComponent } from './indepotent/answer/answer.component';
import { IndepotentComponent } from './indepotent/indepotent.component';
import { BindingComponent } from './binding/binding.component';
import { TalkoffComponent } from './binding/talkoff/talkoff.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionComponent,
    AnswerComponent,
    IndepotentComponent,
    BindingComponent,
    TalkoffComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules.MatMenuModule,
    AngularMaterialModules.MatFormFieldModule,
    AngularMaterialModules.MatButtonModule,
    AngularMaterialModules.MatCheckboxModule,
    AngularMaterialModules.MatSelectModule,
    AngularMaterialModules.MatOptionModule,
    AngularMaterialModules.MatInputModule,
    AngularMaterialModules.MatGridListModule,
    AngularMaterialModules.MatSnackBarModule,
    AngularMaterialModules.MatToolbarModule,
    AngularMaterialModules.MatSidenavModule,
    AngularMaterialModules.MatListModule,
    AngularMaterialModules.MatIconModule,
    AngularMaterialModules.MatSlideToggleModule,
    AngularMaterialModules.MatDatepickerModule,
    AngularMaterialModules.MatNativeDateModule,
    AngularMaterialModules.MatChipsModule,
    AngularMaterialModules.MatRadioModule,
    AngularMaterialModules.MatProgressSpinnerModule,
    AngularMaterialModules.MatProgressBarModule,
    AngularMaterialModules.MatCardModule,
    AngularMaterialModules.MatTableModule,
    AngularMaterialModules.MatStepperModule,
    AngularMaterialModules.MatDialogModule,
    AngularMaterialModules.MatTabsModule,
    AngularMaterialModules.MatExpansionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
