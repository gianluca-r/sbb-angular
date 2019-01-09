import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import {
  IconCommonModule,
  TextareaModule,
  FieldModule,
  LinksModule,
  RadioButtonModule,
  CheckboxModule,
  ButtonModule,
  TabsModule,
  TimeInputModule,
  LoadingModule,
  DatepickerModule,
  LightboxModule,
  AutocompleteModule,
  SelectModule,
  OptionModule,
  AccordionModule,
  NotificationsModule
} from 'sbb-angular';

import { LinksShowcaseComponent } from './links-showcase/links-showcase.component';
import { RadioButtonShowcaseComponent } from './radio-button-showcase/radio-button-showcase.component';
import { CheckboxShowcaseComponent } from './checkbox-showcase/checkbox-showcase.component';
import { TextareaShowcaseComponent } from './textarea-showcase/textarea-showcase.component';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { AutocompleteShowcaseComponent } from './autocomplete-showcase/autocomplete-showcase.component';
import { TimeInputShowcaseComponent } from './time-input-showcase/time-input-showcase.component';
import { FieldShowcaseComponent } from './field-showcase/field-showcase.component';
import { DatepickerShowcaseComponent } from './datepicker-showcase/datepicker-showcase.component';
import { TabsShowcaseComponent } from './tabs-showcase/tabs-showcase.component';
import { PersonListComponent } from './tabs-showcase/person/person-list/person-list.component';
import { LoadingShowcaseComponent } from './loading-showcase/loading-showcase.component';
import {
  LightboxShowcaseComponent,
  LightboxShowcaseExampleComponent,
  LightboxShowcaseExampleContentComponent,
  LightboxShowcaseExample2Component,
  LightboxShowcaseExample2ContentComponent,
  LightboxShowcaseExample3Component,
  LightboxShowcaseExample4Component,
  LightboxShowcaseExample4ContentComponent,
  LightboxShowcaseExample5Component,
  LightboxShowcaseExample5ContentComponent,
  LightboxShowcaseExample6ContentComponent
} from './lightbox-showcase/lightbox-showcase.component';
import { SelectShowcaseComponent } from './select-showcase/select-showcase.component';
import { AccordionShowcaseComponent } from './accordion-showcase/accordion-showcase.component';
import { NotificationShowcaseComponent } from './notification-showcase/notification-showcase.component';

@NgModule({
  declarations: [
    TextareaShowcaseComponent,
    LinksShowcaseComponent,
    AutocompleteShowcaseComponent,
    ButtonShowcaseComponent,
    RadioButtonShowcaseComponent,
    CheckboxShowcaseComponent,
    DatepickerShowcaseComponent,
    FieldShowcaseComponent,
    TabsShowcaseComponent,
    PersonListComponent,
    TimeInputShowcaseComponent,
    LoadingShowcaseComponent,
    LightboxShowcaseComponent,
    LightboxShowcaseExampleComponent,
    LightboxShowcaseExampleContentComponent,
    LightboxShowcaseExample2Component,
    LightboxShowcaseExample2ContentComponent,
    LightboxShowcaseExample3Component,
    LightboxShowcaseExample4Component,
    LightboxShowcaseExample4ContentComponent,
    LightboxShowcaseExample5Component,
    LightboxShowcaseExample5ContentComponent,
    LightboxShowcaseExample6ContentComponent,
    SelectShowcaseComponent,
    AccordionShowcaseComponent,
    NotificationShowcaseComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TextareaModule,
    FieldModule,
    LinksModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(),
    RadioButtonModule,
    CheckboxModule,
    DatepickerModule,
    TimeInputModule,
    IconCommonModule,
    TabsModule,
    LoadingModule,
    LightboxModule,
    OptionModule,
    AutocompleteModule,
    SelectModule,
    AccordionModule,
    NotificationsModule
  ],
  exports: [
    TextareaShowcaseComponent,
    LinksShowcaseComponent,
    AutocompleteShowcaseComponent,
    ButtonShowcaseComponent,
    RadioButtonShowcaseComponent,
    CheckboxShowcaseComponent,
    DatepickerShowcaseComponent,
    FieldShowcaseComponent,
    TabsShowcaseComponent,
    PersonListComponent,
    TimeInputShowcaseComponent,
    SelectShowcaseComponent,
    NotificationShowcaseComponent,
    ButtonModule,
    LoadingModule,
    LightboxModule,
    OptionModule,
    AccordionModule
  ],
  entryComponents: [
    LightboxShowcaseExampleContentComponent,
    LightboxShowcaseExample2ContentComponent,
    LightboxShowcaseExample4ContentComponent,
    LightboxShowcaseExample5ContentComponent,
    LightboxShowcaseExample6ContentComponent
  ]
})
export class ExamplesModule { }
