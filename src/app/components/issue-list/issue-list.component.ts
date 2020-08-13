import { Component, OnInit } from '@angular/core';
import { BugService } from '../../shared/bug.service';

import { Bug } from '../../shared/bug';
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  IssuesList: any = [];


  ngOnInit() {
    this.loadEmployees();
  }

  constructor(
    public bugService: BugService
  ){ }

   // Issues list
   loadEmployees() {
    return this.bugService.GetIssues().subscribe(
       (data: Bug[]) => { this.IssuesList = data; },
       (err:any) => console.log(err),
       () => console.log('All done getting bugs.')
    )
  }

    // Delete issue
    deleteIusse(data){
      var index = index = this.IssuesList.map(x => {return x.issue_name}).indexOf(data.issue_name);
       return this.bugService.DeleteBug(data.id).subscribe(res => {
        this.IssuesList.splice(index, 1)
         console.log('Issue deleted!')
       })
    }

}