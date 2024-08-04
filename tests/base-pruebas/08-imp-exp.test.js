import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heros from '../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => { 
        const heroe = getHeroeById(4);
        expect(heroe).toEqual({
            id: 4,
            name: 'Flash',
            owner: 'DC'
        });
    })
    test('getHeroeById debe retornar undefined si no existe', () => { 
        const heroe = getHeroeById(100);
        expect(heroe).toBeUndefined();
        expect(heroe).toBeFalsy();
    })
    test('getHeroeByOwner debe retornar los heroes de DC', () => { 
        const heroes = getHeroesByOwner('DC');
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);
        expect(heroes).toEqual(heros.filter((heroe)=> heroe.owner === 'DC'));
    })
    test('getHeroeByOwner debe retornar los heroes de marvel', () => { 
        const heroes = getHeroesByOwner('Marvel');
        expect(heroes.length).toBe(2);
    })
})