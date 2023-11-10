import { IUser } from "../interfaces/user";

export class User implements IUser {
    id: number;
    name: string;
    lastName: string;
    fiscalCode: string;
    email: string;
    phone: string;
    province: string;
    age: number;
    constructor() {
        this.id = 0;
        this.name = '';
        this.lastName = '';
        this.fiscalCode = '';
        this.email = '';
        this.phone = '';
        this.province = '';
        this.age = 18;
    }
}