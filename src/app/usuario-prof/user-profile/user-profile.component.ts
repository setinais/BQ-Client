import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from '../../models/usuario.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userForm: FormGroup
    public user: Usuario
    private status: boolean = true;
  constructor( private fb: FormBuilder, private userService: UsuarioService) { }

  ngOnInit() {
      this.userForm = this.fb.group({
          name: this.fb.control(``, [Validators.required]),
          email: this.fb.control(``, [Validators.required]),
          matricula: this.fb.control(``, [Validators.required]),

      });
      this.userService.getUser().subscribe(response => {
        this.userForm.setValue({
            name: response[0].name,
            email: response[0].email,
            matricula: response[0].professor.matricula,
        });
      })
  }
}
