import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-dept-detail',
  templateUrl: './dept-detail.component.html',
  styleUrls: ['./dept-detail.component.css']
})
export class DeptDetailComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
departmentId;
  ngOnInit() {
   let id= parseInt(this.router.snapshot.paramMap.get("id"));
   this.departmentId=id;
  }

}
