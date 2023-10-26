import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {UserLdap} from "../models/user-ldap";

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent implements OnInit {
  displayedColumns:string[]=['nomComplet', 'mail', 'employeNUmero'];
  dataSource=newMatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, {static:true})paginator:MatPaginator | null;

  constructor() {
    this.paginator=null
  }
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.filterPredicate=(data: UserLdap,filter:string)=>
        this.filterPredicate(data,filter);

    this.getUser()
  }
}
