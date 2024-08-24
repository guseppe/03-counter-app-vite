import { getByText, render, screen } from "@testing-library/react";
import {FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => { 
    const title = 'Hola soy goku';
    const subtitle = 'este es el subtitulo';
    test('debe hacer match con el snapshot', () => { 
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    })
    test('debe mostrar titulo en <h1>', () => { 
        render(<FirstApp title={title} />);
        //screen.debug();
        //expect(screen.getByText(title)).toBeTruthy(); 
        //expect(screen.getByText(title)).not.toBeTruthy(); que no exista
        const h1 = screen.getByRole('heading',{level:1});
        expect(h1.innerHTML).toContain(title);
        // const div = screen.getByTestId('titleId');
        // expect(div.innerHTML).toBe(title);

    })
    test('debe contener un subtitulo enviado', () => { 
        render(<FirstApp title={title} subtitle={subtitle} />);
        expect(screen.getAllByText(subtitle).length).toBe(2);
        expect(screen.getAllByText(subtitle)[0].innerHTML).toBe(subtitle);
        
    })
})
