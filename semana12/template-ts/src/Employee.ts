import {User} from "./user";

export class Employee extends User {
    protected admissionDate: string;
    protected baseSalary: number;
    static BENEFITS_VALUE: number = 400;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        super(id, email, name, password);
        console.log("Chamando construtor Employee")
        this.admissionDate = admissionDate,
        this.baseSalary = baseSalary
    }

    public getAdmissionDate(): string {
        return this.admissionDate
    }

    public getBaseSalary(): number {
        return this.baseSalary
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + 400;
    }
}