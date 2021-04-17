import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {User} from './user.model'
import { UserService } from './user.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  public user: User = {
    login: '',
    senha: ''
  }

  ngOnInit(): void {
  }

  navigateToHome(): void{
    this.userService.setUsu(this.user);
    this.router.navigate(['home'])
  }

}
