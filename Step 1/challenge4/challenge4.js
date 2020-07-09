const user = {
    nome: "JMoab",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {

    if (transaction.type === "credit") {
        user.balance = user.balance + transaction.value
        user.transactions.push(transaction)
    } else {
        user.balance = user.balance - transaction.value
        user.transactions.push(transaction)
    }
    console.log(user);
}

function getHigherTransactionByType(transactionType) {
    let higherTransaction = []
    let higherValue = 0

    for (let transaction of user.transactions)
        if (transaction.type == transactionType && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    console.log(higherTransaction);
}

function getHigherTransaction() {
    let higherTransaction = []
    let higherValue = 0

    for (let transaction of user.transactions)
        if (transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    console.log(`Highest transaction is a ${higherTransaction.type} of R$ ${higherTransaction.value}`);

}

function getAverageTransactionValue() {
    let sum = 0
    for (let transaction of user.transactions) {
        sum = sum + transaction.value
    }
    let average = sum / user.transactions.length
    console.log(`The avarage is: R$ ${average.toFixed(2)}`);
}

function getTransactionsCount() {
    let transactionCount = {
        credit: 0,
        debit: 0
    }
    for (let transaction of user.transactions) {
        if (transaction.type == "credit") {
            transactionCount.credit += 1
        } else {
            transactionCount.debit += 1
        }
    }
    console.log(transactionCount);

}

createTransaction({ type: "credit", value: 100 })
createTransaction({ type: "credit", value: 240 })
createTransaction({ type: "credit", value: 24 })
createTransaction({ type: "debit", value: 110 })
createTransaction({ type: "debit", value: 100 })
createTransaction({ type: "debit", value: 2120 })

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")

getHigherTransaction()

getAverageTransactionValue()

getTransactionsCount()