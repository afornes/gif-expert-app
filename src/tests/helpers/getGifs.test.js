import { getGifs } from "../../helpers/getGifs";

describe('Tests for getGifs fetch', () => { 
    test('should bring 10 items', async() => { 
        
        const gifs = await getGifs('monster hunter');
        expect(gifs.length).toBe(10);
    });
    
    test('should bring empty response', async() => { 
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});