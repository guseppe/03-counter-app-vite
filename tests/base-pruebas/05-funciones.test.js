import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => { 
        const objetoUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        //console.log(user);
        expect(user).toEqual(objetoUser);
    })
    test('getUsuarioActivo debe retornar un objeto',() => {
        const nombre = 'Fernando';
        const objetoUsuario = {
            uid:'ABC567',
            username: nombre
        }
        const usuarioActivo = getUsuarioActivo(nombre);
        expect(usuarioActivo).toEqual(objetoUsuario);
    })    
})