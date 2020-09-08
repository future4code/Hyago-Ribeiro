import {Employee} from "./Employee";

export class Seller extends Employee {
    private salesQuantity: number = 0;
    static VALUE_COMISSION: number = 5;

    public setSalesQuantity(newSalesQuantity: number): void {
        this.salesQuantity = newSalesQuantity;
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE + Seller.VALUE_COMISSION * this.salesQuantity
    }
}