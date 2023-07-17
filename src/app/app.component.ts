import { Component } from '@angular/core';
import { Balance } from './models/balance.model';
import { Transaction } from './models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  balance: Balance = {
    amount: 100_000,
    income: 150_000,
    expenses: 50_000,
  };
  transactions: Transaction[] = [
    {
      id: '1',
      type: 'expense',
      amount: 45,
      category: 'Food',
      date: new Date(2023, 6, 26),
    },
    {
      id: '2',
      type: 'expense',
      amount: 280,
      category: 'Shopping',
      date: new Date(2023, 6, 24),
    },
    {
      id: '3',
      type: 'expense',
      amount: 60,
      category: 'Entertainment',
      date: new Date(2023, 6, 22),
    },
    {
      id: '4',
      type: 'income',
      amount: 500,
      category: 'Payroll',
      date: new Date(2023, 6, 20),
    },
  ];
  removeTransaction(transactionId: string) {
    //console.log(`We trying to remove transaction ${transactionId}`);
    //para ver en consola con qué información voy a trabajar
    // console.log(this.transactions);
    // console.log(transactionId);

    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
  }
}
