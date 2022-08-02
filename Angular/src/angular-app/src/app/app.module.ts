import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {CoursesModule} from "./features/courses/courses.module";

import {AppComponent} from './app.component';
import {RegistrationComponent} from './features/registration/registration.component';
import {LoginComponent} from './features/login/login.component';
import {CourseComponent} from "./features/course/course.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
