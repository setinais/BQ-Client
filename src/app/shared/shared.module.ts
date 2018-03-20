import {ModuleWithProviders, NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SelectComponent} from './select/select.component';


@NgModule({
    declarations: [InputComponent, SelectComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [InputComponent, CommonModule, ReactiveFormsModule, SelectComponent]
})

export class SharedModule{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [/*RestaurantsService,
                ShoppingCartService,
                OrderService,
                NotificationService,
                LoginService,
                LoggedInGuard,
                LeaveOrderGuard,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}*/]
        }
    }
}
