import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserLdap } from '../models/user-ldap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css'],
})
export class LdapListComponent implements OnInit, AfterViewInit {
  displayedColums: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null;
element: any;

  constructor(private usersService: UsersService, private  router: Router) {
    this.paginator = null;
  }

  ngOnInit(): void {
    console.log('Values on ngOnInit():');
    this.dataSource.paginator = this.paginator;
    console.log('Mat Paginator:', this.paginator);

    this.dataSource.filterPredicate = (data: UserLdap, filter: string) =>
      !filter || data.nomComplet.toLowerCase().startsWith(filter);
    this.getUsers();
  }

  // filterPredicate(data: { nomComplet: string; },filter: any): boolean {
  //   return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  // }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log('Maat Paginator:', this.paginator);
  }

  unactiveSelected = false;

  private getUsers(): void {
    this.usersService.getUser().subscribe(
      users => {
        if (this.unactiveSelected) {
          this.dataSource.data = users.filter( user =>
          user.active === false);
        } else  {
          this.dataSource.data =users
        }
      }
    );
  }

  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }
}
