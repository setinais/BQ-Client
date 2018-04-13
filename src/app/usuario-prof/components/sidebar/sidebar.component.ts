import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dash', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'questao', title: 'Questões',  icon:'bubble_chart', class: '' },
    { path: 'prova', title: 'Elaborar Prova',  icon:'person', class: '' },
    { path: 'avaliacao', title: 'Analizar Cadastro',  icon:'person', class: '' },
    { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
