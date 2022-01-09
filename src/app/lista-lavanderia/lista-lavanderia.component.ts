import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lavanderias } from '../lavanderias';
import { BuscaService } from '../services/busca.service';

@Component({
  selector: 'app-lista-lavanderia',
  templateUrl: './lista-lavanderia.component.html',
  styleUrls: ['./lista-lavanderia.component.css']
})
export class ListaLavanderiaComponent implements OnInit{
  
  lavanderias = lavanderias;
  lavanderia: any;

  constructor(
    private route: ActivatedRoute, 
    private servicebusca: BuscaService,
  ){}
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const lavanderiaIdFromRoute = Number(routeParams.get('id'));
    this.lavanderia = lavanderias.find((lavanderias) =>
      lavanderias.id === lavanderiaIdFromRoute)
  }

  addToLavanderia(lavanderia: any){
    this.servicebusca.addToLavanderia(lavanderia);
    window.alert("Lavanderia cadastrada com sucesso!!!")
  }

}
