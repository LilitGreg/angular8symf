import { Component, OnInit,NgZone } from '@angular/core';
import { BugService } from '../../shared/bug.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  Issue: any = [];
  propr: string = "aaddd";


  ngOnInit() {
    this.loadEmployee();
  }

  constructor(
    public bugService: BugService,
    private actRoute: ActivatedRoute,    
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ){ }

   // Issues list
   loadEmployee() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    return this.bugService.GetIssue(id).subscribe((data: {}) => {
      this.Issue = data;
    })
  }

    // Delete issue
    // deleteIusse(data){
    //   var index = index = this.IssuesList.map(x => {return x.issue_name}).indexOf(data.issue_name);
    //    return this.bugService.DeleteBug(data.id).subscribe(res => {
    //     this.IssuesList.splice(index, 1)
    //      console.log('Issue deleted!')
    //    })
    // }

}