import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { IntroComponent } from './intro/intro.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { ForpasswordComponent } from './forpassword/forpassword.component';





const routes: Routes = [
  {path:'firstpage',component:FirstpageComponent},
  {path:'homepage',component:ChatpageComponent},
  {path:'intro',component:IntroComponent},
  {path:'secondpage',component:SecondpageComponent},
  {path:'thirdpage',component:ThirdpageComponent},
  {path:'back',component:FirstpageComponent},
  {path:'forgot',component:ForpasswordComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
