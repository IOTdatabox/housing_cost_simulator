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

export function calculateRentalPayment(firstage: number, secondage: number, thirdage: number, firstrent: number, secondrent:number, thirdrent:number): number[] {
  const rentalPayments: number[] = [];
  
  for(let age = firstage; age <= 85; age++) {
    if (age >= firstage && age <= secondage) {
      rentalPayments.push(firstrent);
    } else if (age > secondage && age <= thirdage) {
      rentalPayments.push(secondrent);
    } else {
      rentalPayments.push(thirdrent);
    }
  }
  
  return rentalPayments;
}

export function calculateACCRentalPayment(firstage: number, secondage: number, thirdage: number, firstrent: number, secondrent:number, thirdrent:number): number[] {
  const rentalPayments: number[] = [];
  let accumulatedRent = 0;
  
  for(let age = firstage; age <= 85; age++) {
    if (age >= firstage && age <= secondage) {
      accumulatedRent += firstrent*12;
    } else if (age > secondage && age <= thirdage) {
      accumulatedRent += secondrent*12;
    } else {
      accumulatedRent += thirdrent*12;
    }
    
    rentalPayments.push(Math.round(accumulatedRent));
  }
  
  return rentalPayments;
}

export function calculateRepayMonthlyForBuy(interestrate: number, repayperiod: number, downprice: number, propertyprice: number, futureValue: number = 0, endOrBeginning: boolean = false){
  const adjustedRate = (interestrate / 100)/12;
  const presentValue = propertyprice - downprice;
  const numberOfPeriods = repayperiod*12;
  if (adjustedRate === 0) {
    return -(presentValue + futureValue) / numberOfPeriods;
  }
  
  const pvif = Math.pow(1 + adjustedRate, numberOfPeriods);
  
  let pmt = (-adjustedRate * (futureValue + pvif * presentValue)) / ((endOrBeginning ? 1 + adjustedRate : 1) * (pvif - 1));
  
  if (!endOrBeginning) {
    pmt /= (1 + adjustedRate);
  }  return -pmt;
}

export function calculateACCBuyPayment(firstage: number, repaymonthlyforbuy: number, maintenancecost: number): number[] {
  const buyPayments: number[] = [];
  let accumulated = 0;
  const repayworkingage = repaymonthlyforbuy*12 + maintenancecost;

  const repayplayingage = 20;
  for(let age = firstage; age <= 85; age++) {
    if (age >= firstage && age < 67) {
      accumulated += repayworkingage;
    } else {
      accumulated += repayplayingage;
    }
    
    buyPayments.push(Math.round(accumulated));
  }

  return buyPayments;
}

export function GenerateAgeArray(firstage: number): number[] {
  const agearray: number[] = [];
  for(let age = firstage; age <= 85; age++) {
      agearray.push(age);
  }

  return agearray;
}






