import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { MailProtectorComponent } from './mail-protector/mail-protector.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'uppercase',  component: UppercaseComponent },
  { path: 'mail',  component: UppercaseComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    UppercaseComponent,
    MailProtectorComponent,
  ],
  imports: [
    BrowserModule , RouterModule.forRoot(appRoutes) , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )

  ]
})
export class AppModule { }
