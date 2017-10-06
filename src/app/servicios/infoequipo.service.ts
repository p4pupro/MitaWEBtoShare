import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Infoequipo {
  cargada_sobre_nosotros = false;
  equipo: any [] = [];
  data;

constructor(private http: Http) {
  this.carga_sobre_nosotros();
  this.http.get('../../assets/data/data.json')
             .subscribe(res => this.data = res.json());
 }


  public carga_sobre_nosotros () {
  this.http.get('https://mitaweb-ef054.firebaseio.com/equipo.json')
  .subscribe( data => {
    this.cargada_sobre_nosotros = true;
    this.equipo = data.json();
 });

}

}
