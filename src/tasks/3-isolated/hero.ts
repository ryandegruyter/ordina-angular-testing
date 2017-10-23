import {SuperHttp} from './http';

export class HeroService {
    constructor(private http: SuperHttp) {
    }

    getHeroes(): Array<string> {
        return this.http.get('/heroes');
    }
}
