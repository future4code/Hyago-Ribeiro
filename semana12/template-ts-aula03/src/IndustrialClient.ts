import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private registreIndustry: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public getRegistreIndustry(): string{
        return this.registreIndustry
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}