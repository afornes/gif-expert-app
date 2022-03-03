import { shallow } from 'enzyme';
import GifExpertApp from '../../components/GifExpertApp';

describe('Tests for Gif Expert App component', () => { 
    
    test('should show app correctly', () => { 

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
     });

     test('should show a list of categories', () => { 
         
        const categories = ['Dragon Ball', 'Kimetsu no yaiba'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
      });
 });