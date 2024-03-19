import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
    user : User = new User();
    constructor(private userservice : UserService ,
        private router :Router){}

    ngOnInit(): void{

    }

    saveUser(){
      this.userservice.createUser(this.user).subscribe( data =>{
        console.log(data);
        
      }),
        (error: any) => console.log(error); 
    }
    gotoUserList(){
      this.router.navigate(['/users']);
    }
    onSubmit(){
      console.log(this.user);
      this.saveUser();
    }
}
