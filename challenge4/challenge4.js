const user = {
    nome: "JMoab",
    transactions: [],
    balance: 0
}

function createTransaction(transaction, value) {

    if (transaction === "credit") {
        user.balance = user.balance + value
        user.transactions.push(value)
    } else {
        user.balance = user.balance - value
        user.transactions.push("-" + value)
    }
    console.log(user);

}

createTransaction("credit", 10)
createTransaction("credit", 10)
createTransaction("credit", 10)
createTransaction("debit", 10)
createTransaction("debit", 10)
createTransaction("debit", 10)
