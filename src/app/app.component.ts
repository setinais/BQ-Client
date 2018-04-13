import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';


declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(public ngProgress: NgProgress) {}

    ngOnInit() {
    }
}
