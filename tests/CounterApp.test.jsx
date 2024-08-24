import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en <CounterApp>', () => {   
    const defaultValue = 100;  
    test('Debe coincidir con el snapshot', () => { 
        render(<CounterApp value={defaultValue}/>);
        expect(screen).toMatchSnapshot();
    })
    test('Debe contener el valor inicial 100', () => { 
        render(<CounterApp value={defaultValue}/>);
        //expect(parseInt(screen.getByRole('heading',{level:2}).innerHTML)).toBe(defaultValue)
        //expect(screen.getByRole('heading',{level:2}).innerHTML).toBe('100')
        expect(screen.getByText(defaultValue)).toBeTruthy(); //asi valido si existe el valor
    })
    test('El contador debe incrementar con el boton +1', () => {  
        render(<CounterApp value={defaultValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('101');
    })
    test('El contador debe decrementa con el boton -1', () => {  
        render(<CounterApp value={defaultValue}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('99');
    })
    test('El contador debe resetear con el boton reset', () => {  
        render(<CounterApp value={defaultValue}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(defaultValue + 2)).toBeTruthy();
        //fireEvent.click(screen.getByText('reset'));
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'})); //name lo puede tomar del attributo aria-label, id o name
        expect(screen.getByText(defaultValue)).toBeTruthy();
    })
    
})