import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {BookService} from './book.service';
import {LibraryService} from './library.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RowComponent } from './row/row.component';
import { LibraryComponent } from './library/library.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookformComponent } from './bookform/bookform.component';
import { AuthrowComponent } from './authrow/authrow.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,    
    RowComponent,    
    LibraryComponent,    
    AuthorsComponent,
    BookformComponent,
    AuthrowComponent,
    RegistrationComponent,
    BookdetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [
    BookService,
    LibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
