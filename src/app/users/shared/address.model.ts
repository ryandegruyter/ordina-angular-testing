import { Geo } from './geo.model';

export class Address {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: Geo;
}
