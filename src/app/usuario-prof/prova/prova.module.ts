import {NgModule} from '@angular/core';
import {ProvaComponent} from './prova.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [ProvaComponent],
    imports: [SharedModule]
})

export class ProvaModule{}