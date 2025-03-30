import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemLista';
@Component({
  selector: 'app-lista-compras',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss',
})
export class ListaComprasComponent {
  item: string = '';
  listItems: ItemLista[] = [];

  adicionaItem() {
    let newItem = new ItemLista();
    newItem.id = this.listItems.length + 1;
    newItem.name = this.item;

    this.listItems.push(newItem);
    this.item = '';

    console.table(this.listItems);
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.purchased = !itemLista.purchased;
  }

  limparLista() {
    this.listItems = []
  }
}
