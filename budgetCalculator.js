function budgetCalculator(watch,phone,laptop){

    var watchPrice=watch*50;
    var phonePrice=phone*100;
    var laptopPrice=laptop*500

    totalPrice=watchPrice+phonePrice+laptopPrice;

    return totalPrice

}

var totalBudget=budgetCalculator(1,3,2)
console.log(totalBudget)

