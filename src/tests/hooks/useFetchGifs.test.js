import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests for hook useFetchGifs', () => { 
    
    test('should return initial state', async() => { 

        const category = 'Kimetsu no yaiba';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

     });

    test('should return an img array and loading false', async() => { 

        const category = 'Kimetsu no yaiba';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toEqual(10);
        expect( loading ).toBe(false);

    });
 });