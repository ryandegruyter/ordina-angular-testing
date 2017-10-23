import {HeroService} from './hero';

describe('Isolated test', () => {

    const stubList = ['The Flash', 'Antman'];

    describe('when getting a list of heroes', () => {
        it('should make a GET request to /heroes', () => {
            // Arrange
            const httpSpy = jasmine.createSpyObj('http', ['get']);
            const heroService: HeroService = new HeroService(httpSpy);
            (httpSpy.get).and.returnValue(stubList);

            // Act
            const actual = heroService.getHeroes();

            // Assert
            expect(httpSpy.get).toHaveBeenCalledWith('/heroes');
            expect(actual).toEqual(stubList);
        });
    });
});
