import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName} from '@angular/forms';

@Component({
    selector: 'app-select-container',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, AfterContentInit {

    @Input() label: string
    @Input() errorMessage: string
    @Input() showTip: boolean = true

    select: any

    @ContentChild(NgModel) model: NgModel
    @ContentChild(FormControlName) control: FormControlName

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.select = this.model || this.control

        if (this.select === undefined) {
            throw  new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName')
        }
    }

    hasSuccess(): boolean {
        return this.select.valid && (this.select.dirty || this.select.touched)
    }

    hasError(): boolean {
        return this.select.invalid && (this.select.dirty || this.select.touched)
    }


}