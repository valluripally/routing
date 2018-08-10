import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments=[
    {id:1, name:"Angular2"},
    {id:2, name:"Angularjs"},
    {id:3, name:"Angular6"},
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(department)
  {
    this.router.navigate(['/departments', department.id]);
  }

}
