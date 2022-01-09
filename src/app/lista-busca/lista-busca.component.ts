import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../services/busca.service';

@Component({
  selector: 'app-lista-busca',
  templateUrl: './lista-busca.component.html',
  styleUrls: ['./lista-busca.component.css']
})
export class ListaBuscaComponent implements OnInit {

  lavanderia = this.buscaService.getListaLavanderias();

  constructor(
    private buscaService: BuscaService,
  ) { }

  ngOnInit(): void {
    this.lavanderia;
  }

}
