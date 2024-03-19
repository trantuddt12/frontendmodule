import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { User } from '../user';
import { UserService } from '../user.service';
import { ResultJson } from '../models/result-json';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  employees: Employee[];

  users:User[];

  // muon su dung bien phai khai bao trong constructor
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    // this.users = [
    //   {
    //     "username": "THU2",
    //     "password": "123456",
    //     "postalCode": "0001"
    //   },
    //   {
    //     "username": "Truc",
    //     "password": "123456",
    //     "postalCode": "0002"
    //   },
    //   {
    //     "username": "Trúc",
    //     "password": "123456",
    //     "postalCode": "0002"
    //   }
    // ];
  }
  private getUsers() {
    this.userService.getUsersList().subscribe(
      (result: ResultJson) => {
        if (result && result.data) {
          this.users = result.data;
        } else {
          console.log('No data returned.');
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
