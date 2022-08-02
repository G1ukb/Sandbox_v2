import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SharedRoutingModule} from './shared-routing.module';
import {HeaderComponent,
        InfoComponent,
        ModalWindowComponent,
        ButtonComponent,
        SearchComponent} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    ModalWindowComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    BrowserModule,
    NgbModule
  ],
  exports: [
    ButtonComponent,
    ModalWindowComponent,
    HeaderComponent,
    InfoComponent
  ]
})
export class SharedModule {

}
