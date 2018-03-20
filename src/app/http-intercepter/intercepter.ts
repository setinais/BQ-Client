import {HTTP_INTERCEPTORS} from '@angular/common/http'

import {TokenInterceptor} from './token-intercepter';

export const httpInterceptorsProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
]
