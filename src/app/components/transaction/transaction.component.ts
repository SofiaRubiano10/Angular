import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  //parámetro de entrada
  @Input() transaction!: Transaction;
  //Evento de salida
  @Output() removeTransactionEvent = new EventEmitter<string>();

  dateStyles: Record<string, string> = {
    'margin-top': '3px',
  };

  //funcion ejecutada al momento de montar el componente
  ngOnInit() {
    this.dateStyles['border-bottom'] =
      this.transaction?.type === 'expense'
        ? '1px solid red'
        : '1px solid green';
  }
  removeTransaction() {
    // Emite el evento removeTransactionEvent al componente padre enviando el ID de la transacción
    this.removeTransactionEvent.emit(this.transaction.id);
  }
}
