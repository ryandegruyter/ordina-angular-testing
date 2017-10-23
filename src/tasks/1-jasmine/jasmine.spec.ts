describe('String methods', () => {
    describe('when slice', () => {
        it('should substring up to the end index', function () {
            const actual: string = 'Superman'.slice(1, 3);
            const expected: string = 'up';
            expect(actual).toEqual(expected);
        });

        it('should substring to the end of the string when end index is not specified', () => {
            const actual: string = 'Superman'.slice(1);
            const expected: string = 'uperman';
            expect(actual).toEqual(expected);
        });
    });
});
