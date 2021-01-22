import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html'
})
export class DetalhesProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produto: Produto[];

  ngOnInit() {
  }

}
