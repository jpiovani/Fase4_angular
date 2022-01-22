import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BuscaService } from '../services/busca.service';

@Component({
  selector: 'app-cadastrar-lavanderia',
  templateUrl: './cadastrar-lavanderia.component.html',
  styleUrls: ['./cadastrar-lavanderia.component.css']
})
export class CadastrarLavanderiaComponent implements OnInit {

  items = this.buscaService.getLavanderias();
  formulario = this.form.group({
    nome: '',
    endereco: '',
    numeroEndereco: '',
    bairro: '',
    zona: ''
  });

  constructor(
    private form: FormBuilder,
    private buscaService: BuscaService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.buscaService.addToLavanderia(this.formulario.value);
    window.alert("Lavanderia cadastrada com sucesso!!! ");
    this.formulario = this.form.group({
      nome: '',
      endereco: '',
      numeroEndereco: '',
      bairro: '',
      zona: ''
    });
  }

}
