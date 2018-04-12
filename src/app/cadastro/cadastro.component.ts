import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UsuarioService} from '../services/usuario.service';
import {Usuario} from '../models/usuario.model';
import {LoginService} from '../services/login.service';
import {isUndefined} from 'util';
import {Router} from '@angular/router';



declare const $: any;

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  userForm: FormGroup;
  professor: boolean = false;
  user: Usuario;
  errors: any;
  status_error: boolean = false;
  pdf;
  fileToUpload: File = null;
  type_error: string = 'info'
  public documento_comprovante;



  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private login: LoginService,
              private router: Router) { }

  ngOnInit() {
      this.login.login('','',false).subscribe(token => localStorage.setItem('token', JSON.stringify(token)) , error => console.log(error) );
      $.material.init();
      this.userForm = this.fb.group({
          name: this.fb.control('', [Validators.required]),
          email: this.fb.control('', [Validators.required]),
          sexo: this.fb.control('', [Validators.required]),
          telefone: this.fb.control('', [Validators.required]),
          password: this.fb.control('', [Validators.required]),
          password_confirmation: this.fb.control('', [Validators.required]),
          info_client: this.fb.control('', [Validators.required]),
          matricula: this.fb.control('',[Validators.required]),
          cpf: this.fb.control('',[Validators.required]),
          documento_comprovante: [this.documento_comprovante, Validators.required]
      });
  }

  toToggleProfessor(){
      console.log(localStorage)
      if(this.professor){
          this.professor = false;
      }else{
          this.professor = true;
      }
    }
  addUsuario(usuario) {
      usuario.info_client = 3;
      if(this.professor){
        this.usuarioService.addProf(usuario).subscribe(
            response => {
                this.login.isLoggin = false;
                this.userForm.reset();
                const message: any[] = ['Cadastro efetuado com sucesso!'];
                this.setError(message, 'success')
                this.router.navigate(['/login'])
            },
            error => {
                this.setErrors(error, 'danger');

            }
        );
      }else{
        this.usuarioService.addUser(usuario).subscribe(
            response => {
                this.login.isLoggin = false;
                this.user = response;
                this.userForm.reset();
                const message: any[] = ['Cadastro efetuado com sucesso!'];
                this.setError(message, 'success')
                this.router.navigate(['/login'])
            },
            error => {
                this.setErrors(error, 'danger');
            }
        );
      }

    }
    setErrors(error, type){

        const err = new Errors();
        const retorno: Errors = error.error.errors;
        this.setError(err.setErrors(retorno), type);

    }

    setError(array, type){
      this.type_error = type;
      this.errors = array;
      this.status_error = true;
    }

    toCloseMessages(){ this.status_error = false; }

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload)
    }
    onFileChange($event){
        const file = $event.target.files[0]; // <--- File Object for future use.
        this.userForm.controls['documento_comprovante'].setValue(file ? file.name : '');
    }

}
export class Errors{
    email: string = undefined
    name: string = undefined
    password: string = undefined
    telefone: number = undefined
    sexo: string = undefined
    matricula: string = undefined
    cpf: string = undefined
    documento_comprovante: any = undefined

    setErrors(dados: Errors): any[] {
        const re: any[] = []

        if(!isUndefined(dados.email))
            re.push(dados.email[0])
        if(!isUndefined(dados.name))
            re.push(dados.name[0])
        if(!isUndefined(dados.password))
            re.push(dados.password[0])
        if(!isUndefined(dados.telefone))
            re.push(dados.telefone[0])
        if(!isUndefined(dados.sexo))
            re.push(dados.sexo[0])
        if(!isUndefined(dados.matricula))
            re.push(dados.matricula[0])
        if(!isUndefined(dados.cpf))
            re.push(dados.cpf[0])
        if(!isUndefined(dados.documento_comprovante))
            re.push(dados.documento_comprovante[0])

        return re;
    }
}