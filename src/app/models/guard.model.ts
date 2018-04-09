import {Usuario} from './usuario.model';
import {Token} from './token.model';
import {Acesso} from './acesso.model';

export class Guard {
    public user: Usuario
    public token: Token
    public acesso: Acesso
    public isLoggin: boolean
    public name: string

    setToken(token: Token){
        this.token = token;
        this.isLoggin = true;
    }
}

