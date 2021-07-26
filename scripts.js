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
    amount: -123400,
    date: '23/01/2021',
  },
  {
    id: 2,
    description: 'internet',
    amount: -689452,
    date: '23/01/2021',
  },
  {
    id: 3,
    description: 'PUTA',
    amount: 84621,
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

    const amount = Utils.formatCurrency(transaction.amount);
    //
    const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
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
      const signal = Number(value) < 0 ? "-" : "";

      value = String(value).replace(/\D/g, "");

      value = Number(value) / 100;

      value = value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
      });
      return signal + value;
    }
}

transactions.forEach(function(transaction){
  DOM.addTransaction(transaction);
});