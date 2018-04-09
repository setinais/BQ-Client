import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../models/usuario.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userForm: FormGroup
  public dados: Usuario
  constructor(private auth: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(localStorage)
      const user = localStorage.getItem('status');
    console.log(user);
      this.userForm = this.fb.group({
          name: this.fb.control(`${user}`, [Validators.required]),
          email: this.fb.control('', [Validators.required]),
          sexo: this.fb.control('', [Validators.required]),
          telefone: this.fb.control('', [Validators.required]),
          password: this.fb.control('', [Validators.required]),
          password_confirmation: this.fb.control('', [Validators.required]),
          matricula: this.fb.control('',[Validators.required]),
          cpf: this.fb.control('',[Validators.required]),
      });


  }

  teste(){
      console.log(this.userForm);
  }

}
