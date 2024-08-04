import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
    test('getSaludo() debe retornar "Hola Guseppe"', ()=>{
        const nombre = 'Guseppe';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${ nombre }`);
    })
})