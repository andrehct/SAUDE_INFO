import { Component, OnInit } from '@angular/core';
import { User } from '../user-crud/user.model';
import { UserService } from '../user-crud/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: User= { //apagar os dados iniciais quando for na vera
    login: 'teste123',
    senha: 'senha123'
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //this.usuario = this.userService.getUsu(); //descomentar quando for na vera
  }

  atualizarUsu(){
    this.userService.setUsu(this.usuario);
  }

}
