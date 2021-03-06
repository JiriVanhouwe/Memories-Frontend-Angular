import { BrowserModule } from '@angular/platform-browser'; //importeren libraries of andere modules die je maakte
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

import { httpInterceptorProviders } from './interceptor/providers';
import { FriendsModule } from './friends/friends.module';
import { UserModule } from './user/user.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MemoriesModule } from './memories/memories.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [  //hier komen componenten die tot de module behoren
    AppComponent, LandingpageComponent, NavbarComponent, PageNotFoundComponent 
  ],
  imports: [ //hier is de volgorde belangrijk
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule, 
    MaterialModule,
    HttpClientModule,
    MemoriesModule,
    FriendsModule,   
    UserModule,
    AppRoutingModule       
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent] //de startcomponent van onze applicatie
})

export class AppModule { }
