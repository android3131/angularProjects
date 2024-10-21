import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ConferenceComponent } from './conference-screen/conference/conference.component';
import { PersonCardComponent } from './conference-screen/person-card/person-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConferenceComponent,
    PersonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
