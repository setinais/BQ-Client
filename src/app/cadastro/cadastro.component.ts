import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../services/usuario.service';
import {Usuario} from '../usuario-prof/user-profile/usuario.model';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

declare const $: any;

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  userForm: FormGroup;
  profForm: FormGroup;
  professor: boolean = false;
  user: Usuario;

  constructor(private router: Router,private fb: FormBuilder, private usuarioService: UsuarioService, private loginSer: LoginService) { }

  ngOnInit() {
      $.material.init();
      this.userForm = this.fb.group({
          name: this.fb.control('', [Validators.required]),
          email: this.fb.control('', [Validators.required]),
          sexo: this.fb.control('', [Validators.required]),
          telefone: this.fb.control('', [Validators.required]),
          password: this.fb.control('', [Validators.required]),
          password_confirmation: this.fb.control('', [Validators.required])
      });
      this.profForm = this.fb.group({
              nome_prof: this.fb.control('',[]),
              matricula_prof: this.fb.control('',[]),
              cpf: this.fb.control('',[]),
              documento_comprovante: this.fb.control('',[]),
              professor_id: ''
      });
      this.usuarioService.getToken();
  }

  toToggleProfessor(){
      if(this.professor){
          this.professor = false;
      }else{
          this.professor = true;
      }
    }
  addUsuario(usuario, professor) {

        this.usuarioService.addUser(usuario).subscribe(
            response => {
                this.user = response['data'];
                this.userForm.reset();
                this.loginSer.token = undefined;
                this.router.navigate(['/login']);
            }
        );
        if(this.professor){
            usuario.professor.professor_id = this.user.id;
            //this.usuarioService.addProf()
        }
    }

}
