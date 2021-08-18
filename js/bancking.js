
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositnput = document.getElementById('deposit-input')
    const NewdepositAmount = parseFloat(depositnput.value)
    const deposiTotal = document.getElementById('deposit-total')
    const previousDEpositAmount = parseFloat(deposiTotal.innerText)
    const newDEpositTotal = previousDEpositAmount + NewdepositAmount
    deposiTotal.innerText = newDEpositTotal

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotalText = parseFloat(balanceTotalText)
    const balanceTOtal = previousBalanceTotalText + NewdepositAmount

balanceTotal.innerText=balanceTOtal

        depositnput.value = ''
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const depositnput = document.getElementById('withdraw-input')
    const NewdepositAmount = parseFloat(depositnput.value)
    const deposiTotal = document.getElementById('withdraw-total')
    const previousDEpositAmount = parseFloat(deposiTotal.innerText)
    const newDEpositTotal = previousDEpositAmount + NewdepositAmount
    deposiTotal.innerText = newDEpositTotal

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotalText = parseFloat(balanceTotalText)
    const balanceTOtal = previousBalanceTotalText - NewdepositAmount

balanceTotal.innerText=balanceTOtal

        depositnput.value = ''
})

































































