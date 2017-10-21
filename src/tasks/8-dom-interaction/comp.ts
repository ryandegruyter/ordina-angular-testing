import {Component} from '@angular/core';

@Component({
    selector: 'app-test-comp',
    template: `
        <div>
            <h1>{{title}}</h1>
            <input type='text'
                   [(ngModel)]='title'>
        </div>
    `,
})
export class TestComponent {
    title = 'Default title';
}
