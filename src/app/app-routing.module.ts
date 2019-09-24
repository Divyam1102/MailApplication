import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { InboxComponent} from './components/inbox/inbox.component';
import { SearchComponent} from './components/search/search.component';
import { SentComponent} from './components/sent/sent.component';
import { ArchiveComponent} from './components/archive/archive.component';
import { ComposeemailComponent } from './components/composeemail/composeemail.component';
const routes: Routes = [
  {
    path : "",
    component: HomeComponent
  },
  {
    path : "emailLogin",
    component: LoginComponent
  },
  {
    path: 'inbox/:email',
    component: InboxComponent,
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'inbox/:email/archive',
    component: ArchiveComponent
  },
  {
    path:'inbox/:email/sent',
    component:SentComponent
  },
  {
    path: 'inbox/:email/composeEmail',
    component: ComposeemailComponent
  },{
    path: 'delete/:id',
    component: InboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
