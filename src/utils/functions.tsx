export function calculateRepayMonthly(incomeannual: number, incomefamily: number, repaypercent: number){
    const RepayAnnual = (incomeannual+incomefamily)*repaypercent*0.01;
    return RepayAnnual/12;
}

export function calculatePV(cashFlow: number, rate: number, periods: number): number {
    // Check if the rate is not zero to avoid division by zero error

    periods = periods *12;
    rate = rate*0.01/12;

    if (rate === 0) {
      return cashFlow * periods;
    }
  
    // Calculate the present value using the present value of annuity formula
    const pv = cashFlow * ((1 - Math.pow(1 + rate, -periods)) / rate);
    
    return pv;
  }

export function calculatePurchaseAmount(pv: number){
    return Math.round(pv);
}

export function calculateRepayMonthlyEasily(repayeasily: number, repayextra: number): number{
    return (repayeasily*12 + repayextra*2)/12;
}



