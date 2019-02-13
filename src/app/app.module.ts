import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdvisorComponent } from './components/advisor/advisor.component';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvisorComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
