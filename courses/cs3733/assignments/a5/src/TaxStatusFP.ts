type TaxStrategy = (income: number) => number;

// create the singleTax function of type TaxStrategy using the fat arrow notation
export const singleTax: TaxStrategy = (income: number): number => {
    if(income <= 19999) {
        return income * 0.12;
    }
    else if(income <= 49999) {
        return income * 0.15;
    }
    else {
        return income * 0.20;
    }
};

// create the marriedTax function of type TaxStrategy using the fat arrow notation
export const marriedTax: TaxStrategy = (income: number): number => {
    if(income <= 49999) {
        return income * 0.12;
    }
    else if(income <= 99999) {
        return income * 0.15;
    }
    else {
        return income * 0.20;
    }
};

// create the separatedTax function of type TaxStrategy using the fat arrow notation
export const separatedTax: TaxStrategy = (income: number): number => {
    if(income <= 15999) {
        return income * 0.12;
    }
    else if(income <= 40000) {
        return income * 0.15;
    }
    else if(income <= 74999) {
        return income * 0.20;
    }
    else {
        return income * 0.25;
    }
};

// create the selectTaxStrategy function which takes TaxStrategy and income parameters and returns the calculated tax.
export const selectTaxStrategy = (strategy: TaxStrategy, income: number): number => {
    return strategy(income);
};