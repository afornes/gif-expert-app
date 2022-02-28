import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Tests for AddCategory Component', () => { 
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });
    
    test('should return valid snapshot', () => { 
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should change textfield', () => { 
        
        const input = wrapper.find('input');
        const value = 'Hello world';
        
        input.simulate('change', { target: { value } });        
    });
    
    test('should not post on submit', () => { 
        
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('should call setCategories and clean the textfield', () => { 
        
        const input = wrapper.find('input');
        const value = 'Monster Hunter';
        
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    });
});