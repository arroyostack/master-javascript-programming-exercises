const calculateBillTotal = (preTaxAndTipAmount) => {
    const taxes = (preTaxAndTipAmount / 100) * 9.5;
    const tips = (preTaxAndTipAmount / 100) * 15;

    return preTaxAndTipAmount + taxes + tips;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9