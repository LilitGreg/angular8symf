import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueComponent } from './components/issue/issue.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { BugService } from './shared/bug.service';
//import { IssueComponent } from './issue/issue.component';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  // {path: '', redirectTo : '/bugtracking', pathMatch : 'full' },
  { path: 'add-issue', component: AddIssueComponent },
  { path: 'issues', component: IssueListComponent},
  { path: 'edit-issue/:id', component: EditIssueComponent },
  { path: 'issue/:id', component: IssueComponent },
  
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
 // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddIssueComponent,
    EditIssueComponent,
    IssueListComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
