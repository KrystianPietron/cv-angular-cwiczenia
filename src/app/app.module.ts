import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FotoComponent } from './foto/foto.component';
import { MyNameComponent } from './my-name/my-name.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { LinksComponent } from './links/links.component';
import { DownloadComponent } from './download/download.component';
import { ClauseComponent } from './clause/clause.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    MyNameComponent,
    ContactComponent,
    HeaderComponent,
    SummaryComponent,
    AbilitiesComponent,
    ExperienceComponent,
    EducationComponent,
    HobbiesComponent,
    LinksComponent,
    DownloadComponent,
    ClauseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
