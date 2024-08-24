import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => { 
    test('GetImagen debe retornar la url de una imagen', async() => { 
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
    })
    test('GetImagen debe retornar un error si no tenemos api key', async() => { 
        const resp = await getImagen();
        console.log(resp);
        expect(resp).toBe('No se encontró la imágen');
    })
})
