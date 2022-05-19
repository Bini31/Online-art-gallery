import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtstoreComponent } from './artstore/artstore.component';
import { RegisterComponent } from './register/register.component';
import { ArtComponent } from './art/art.component';
import { GuidelineComponent } from './guideline/guideline.component';

@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,
      HeaderComponent,
      FooterComponent,
      ArtistsComponent,
      ArtstoreComponent,
      RegisterComponent,
      ArtComponent,
      GuidelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
