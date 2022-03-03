import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests for Gif Grid', () => { 
    
    const category = 'Kimetsu no yaiba';
    
    test('should show gif grid', () => { 
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show gifs when useFetchGifs received', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cosas.gif',
                title: 'Cosas'
            },
            {
                id: 'DEF',
                url: 'https://localhost/cosas-2.gif',
                title: 'Más Cosas'
            }
        ];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    });
});