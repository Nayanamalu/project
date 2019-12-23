import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { IntroComponent } from './intro/intro.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { ForpasswordComponent } from './forpassword/forpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent,
    IntroComponent,
    ThirdpageComponent,
    ChatpageComponent,
    ForpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
