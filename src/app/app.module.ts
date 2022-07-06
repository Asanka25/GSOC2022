import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileSelectorComponent } from './components/file-selector/file-selector.component';
import { VersionPickerButtonComponent } from './components/version-picker-button/version-picker-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { FilePickerCheckBoxComponent } from './components/file-picker-check-box/file-picker-check-box.component';
import { VersionPickerModelComponent } from './version-picker-model/version-picker-model.component';
import { VersionService } from './version.service';
import { VersionComponent } from './version/version.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectorComponent,
    VersionPickerButtonComponent,
    HeaderComponent,
    FilePickerCheckBoxComponent,
    VersionPickerModelComponent,
    VersionComponent
  ],
  entryComponents:[VersionPickerModelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [VersionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
