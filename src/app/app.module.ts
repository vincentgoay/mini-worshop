import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form.component';
import { AlbumComponent } from './components/album.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }