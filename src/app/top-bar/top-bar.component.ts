import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lavanderias } from '../lavanderias';
import { BuscaService } from '../services/busca.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  lavanderias = lavanderias;
  lavanderia: any;

  constructor(
    private route: ActivatedRoute,
    private servicebusca: BuscaService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const lavanderiaIdFromRoute = Number(routeParams.get('id'));
    this.lavanderia = lavanderias.find((lavanderias) =>
      lavanderias.id === lavanderiaIdFromRoute)
  }

  getLavanderias() {
    this.servicebusca.getListaLavanderias();
    window.alert("Lista de Lavanderias exibiada com sucesso!!!")
  }


}
