const Modal = {
  open(){
    document.querySelector('.modal-overlay')
    .classList.add('active')
  },
  close(){
    document.querySelector('.modal-overlay')
    .classList.remove('active')
  }
}
const transactions = [
  {
    id: 1,
    description: 'luz',
    amount: -50000,
    date: '23/01/2021',
  },
  {
    id: 2,
    description: 'internet',
    amount: 50000,
    date: '23/01/2021',
  },
  {
    id: 3,
    description: 'força',
    amount: -20000,
    date: '23/01/2021',
  },
]

const Transaction = {
  incomes() {

  },
  expenses() {

  },
  total() {

  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
      const tr = document.createElement('tr');
      tr.innerHTML = DOM.innerHTMLTransaction(transaction);
  
      DOM.transactionsContainer.appendChild(tr);

    },

  innerHTMLTransaction(transaction) {
    //Operação para verificar se positivo ou negativo o lançamento
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    //
    const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <th>
            <img src="./assets/minus.svg" 
            alt="Remover lançamento">
        </th>
      
    `
    return html;
  }
}

const Utils = {
    formatCurrency(value) {
      const signal = number(value) < 0 ? "-" : " ";

      value = String(value).replace()
    }
}

transactions.forEach(function(transaction){
  DOM.addTransaction(transaction);
});