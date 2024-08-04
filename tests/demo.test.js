describe('Pruebas en <DemoComponent/>', () => { 
    test('Esta prueba no debe fallar', ()=>{
        // if(1==0){
        //     throw new Error("no se puede dividir entre cero")
        // }
        //1. Inicialización
        const message1 = "Hola mundo";
        //2. Estímulo o acción
        const message2 = message1.trim();
        //3. Observar comportamiento esperado (assert)
        expect(message1).toBe(message2); 
    })
})
