import {HeroService} from './hero';

describe('UserService', () => {

    const heroList: Array<string> = ['Batman', 'Superman'];

    it('Using a spy: should return a list of heroes', () => {
        // Arrange
        const heroService: HeroService = new HeroService();
        spyOn(heroService, 'getHeroes').and.returnValue(heroList);

        // Act
        const actual: Array<string> = heroService.getHeroes();

        // Assert
        expect(heroService.getHeroes).toHaveBeenCalled();
        expect(actual).toEqual(heroList);
    });

    it('Using a mock: should return a list of heroes 2', () => {
        // Arrange
        const heroService = jasmine.createSpyObj('heroService', ['getHeroes']);
        heroService.getHeroes.and.returnValue(heroList);

        // Act
        const actual: Array<string> = heroService.getHeroes();

        // Assert
        expect(heroService.getHeroes).toHaveBeenCalled();
        expect(actual).toEqual(heroList);
    });
});
