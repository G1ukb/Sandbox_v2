import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {SharedModule} from "../../shared/shared.module";
import {CoursesComponent} from "./courses.component";
import {CourseCardComponent} from './course-card/course-card.component';
import {TimePipe} from "./course-card/course-card.component";

@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule {
}
