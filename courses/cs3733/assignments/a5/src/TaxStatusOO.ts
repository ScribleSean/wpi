export interface TaxStatusOO {
    calculateTax(income: number): number;
}

export class Single {
    public calculateTax(income: number): number {
        if(income <= 19999) {
            return income * 0.12;
        }
        else if(income <= 49999) {
            return income * 0.15;
        }
        else {
            return income * 0.20;
        }
    }
}

// create the class Married

export class Married {
    public calculateTax(income: number): number {
        if(income <= 49999) {
            return income * 0.12;
        }
        else if(income <= 99999) {
            return income * 0.15;
        }
        else {
            return income * 0.20;
        }
    }

}

// create the class Separated

export class Separated {
    public calculateTax(income: number): number {
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
    }

}

export class Context {
    private _taxStatus: TaxStatusOO;
    constructor(taxStatus: TaxStatusOO) {
        this._taxStatus = taxStatus;
    }

    get taxStatus(): TaxStatusOO {
        return this._taxStatus;
    }

    set taxStatus(value: TaxStatusOO) {
        this._taxStatus = value;
    }

    calculateTax(income: number): number {
        return this._taxStatus.calculateTax(income);
    }
}