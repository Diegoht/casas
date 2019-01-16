import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  casa=InfoPage;
  fav=FavoritosPage;
  
  casas=[
    {
      foto: '../assets/imgs/casa1.jpg',
      tipo: 'Venta',
      precio: '6,150,000',
      colonia: 'Colomos Providencia',
      cuartos: '3'
    },

    {
      foto: '../assets/imgs/casa2.jpg',
      tipo: 'Venta',
      precio: '1,350,000',
      colonia: 'Tesistán',
      cuartos: '2'
    },

    {
      foto: '../assets/imgs/casa3.jpg',
      tipo: 'Venta',
      precio: '1,580,000',
      colonia: 'Colon Industrial',
      cuartos: '3'
    },

    {
      foto: '../assets/imgs/casa4.jpg',
      tipo: 'Renta',
      precio: '6000',
      colonia: 'Lomas del Valle',
      cuartos: '2'
    },

    {
      foto: '../assets/imgs/casa5.jpg',
      tipo: 'Venta',
      precio: '1,735,000',
      colonia: 'Altamira',
      cuartos: '2'
    },

    {
      foto: '../assets/imgs/casa6.jpg',
      tipo: 'Renta',
      precio: '4,100',
      colonia: 'Povidencia',
      cuartos: '6'
    },

    {
      foto: '../assets/imgs/casa7.jpg',
      tipo: 'Venta',
      precio: '1,300,000',
      colonia: 'Loma Bonita',
      cuartos: '4'
    },

    {
      foto: '../assets/imgs/casa8.jpg',
      tipo: 'Venta',
      precio: '1,600,000',
      colonia: 'Santa Teresita',
      cuartos: '4'
    },

    {
      foto: '../assets/imgs/casa9.jpg',
      tipo: 'Venta',
      precio: '14,490,000',
      colonia: 'Puerta de Hierro',
      cuartos: '4'
    },

    {
      foto: '../assets/imgs/casa10.jpg',
      tipo: 'Venta',
      precio: '5,100,000',
      colonia: 'Chapalita',
      cuartos: '3'
    },

  ]

  favoritas=[]

  constructor(public navCtrl: NavController) {

  }

  clickcasa(c){
      this.navCtrl.push(this.casa, {fav: this.favoritas, casa: c});
  }

  favoritosClick(){
    this.navCtrl.push(this.fav, {fav: this.favoritas});
  }

}
