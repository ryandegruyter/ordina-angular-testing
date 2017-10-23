import {async, fakeAsync, tick} from '@angular/core/testing';

describe('Testing async operations', () => {
    describe('done', () => {
        it('should stop test when the done function is called', done => {
            let value = 0;

            setTimeout(() => {
                value = 5;
                expect(value).toEqual(5);
                done();
            }, 200);

            expect(value).toEqual(0);
        });
    });

    describe('async', () => {
        it('should assert', async(() => {

            let value = 0;

            setTimeout(() => {
                value = 5;
                expect(value).toEqual(5);
            }, 200);

            expect(value).toEqual(0);
        }));
    });

    describe('fakeAsync', () => {
        it('should assert using fakeAsync', fakeAsync(() => {

            let value = 0;

            setTimeout(() => {
                value = 5;
            }, 200);

            tick(200);

            expect(value).toEqual(5);
        }));
    });
});
