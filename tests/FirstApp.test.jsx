import { getByText, render } from "@testing-library/react";
import {FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => { 
    // test('debe hacer match con el snapshot', () => { 
    //     const title = 'Hola soy goku';
    //     const {container} = render(<FirstApp title={title}/>);
    //     expect(container).toMatchSnapshot();
    // })
    test('debe mostrar titulo en <h1>', () => { 
        const title = 'Hola soy goku';
        const {container, getByText, getByTestId} = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();
        const h1 = container.querySelector('h1');
        //console.log(h1.innerHTML);
        expect(h1.innerHTML).toBe(title);
        expect(h1.innerHTML).toContain(title); //si hay espacios no importa, con tobe si
        //console.log(getByTestId('titleId').innerHTML);
        expect(getByTestId('titleId').innerHTML).toBe(title); //este seria una buena opcion porque es mas flexible
    })
    test('debe contener un subtitulo', () => { 
        const title = 'Hola soy goku';
        const subtitle = 'subtitulo';
        const {container, getByText, getAllByText} = render(<FirstApp title={title} subtitle={subtitle}/>);
        //expect(getByText(subtitle)).toBeTruthy();
        expect(getAllByText(subtitle).length).toBe(2);

    })
})
