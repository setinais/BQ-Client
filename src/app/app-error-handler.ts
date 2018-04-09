import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';

import {NotificacaoService} from './services/notificacao.service';

@Injectable()
export class AplicationErrorHandler extends ErrorHandler{

    constructor(private ns: NotificacaoService,
                private injector: Injector,
                private zone: NgZone){
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        if(errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.message
            const messageServer = errorResponse.error.message
            this.zone.run(()=>{
                switch (errorResponse.status) {
                    case 400:
                        this.ns.showNotification( (messageServer || message), 'danger')

                        break;
                    case 401:
                        this.ns.showNotification('Error 401 redirecionar ', 'danger')
                        break;
                    case 403:
                        this.ns.showNotification('Não autorizado', 'danger')
                        break;
                    case 404:
                        this.ns.showNotification(((messageServer || message) || 'Não encotrado'), 'info')
                        break;
                    case 405:
                        this.ns.showNotification('Não permitido.', 'danger')
                        break;
                    case 500:
                        this.ns.showNotification((messageServer || message), 'danger')
                        break;
                    case 0:
                        this.ns.showNotification('Falha de conexão', 'danger')
                        break;
                    case 422:
                        this.ns.showNotification('Alguns campos estão errados!', 'alert')
                        break;

                }
            })
        }
    }
}