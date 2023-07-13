import { Component, Input } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  @Input() transaction!: Transaction;

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
  miFuncion() {
    console.log('Me hicieron click');
  }
}
