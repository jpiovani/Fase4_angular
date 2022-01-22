import { Injectable } from '@angular/core';
import { lavanderias } from '../lavanderias';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  items: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToLavanderia(lavanderia: any){
    this.http.post('http://localhost:8080/lavanderias/v1/add', lavanderia).subscribe((data) => {});
  }

  getLavanderias(){
    return this.items;
  }

  clearLavanderia(){
    let aux = this.items;
    this.items = [];
    return aux;
  }

  getListaLavanderias() : Observable<any>{
    return this.http.get
    <{ nome: string, endereco: string, numero: number, bairro: string, zona: string }>
    ('http://localhost:8080/lavanderias/v1');
  }


}
