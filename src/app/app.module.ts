import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { SearchComponent } from './components/search/search.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { SentComponent } from './components/sent/sent.component';
import { EmailApiService } from './service/email-api.service';

import { ComposeemailComponent } from './components/composeemail/composeemail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InboxComponent,
    SearchComponent,
    ArchiveComponent,
    SentComponent,
    ComposeemailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmailApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
