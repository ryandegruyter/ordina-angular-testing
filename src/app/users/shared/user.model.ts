import { Address } from './address.model';
import { Company } from './company.model';

export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: Address;
    public phone: string;
    public website: string;
    public company: Company;
}
