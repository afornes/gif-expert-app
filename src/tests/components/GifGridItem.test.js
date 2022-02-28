import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Tests for GifGridItem', () => { 
  
  const title = 'Title';
  const url = 'https://localhost/foo.jpg';
  const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
  
  test('should show a card', () => { 
    
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('should have a paragraph with title', () => { 
    
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );
  });
  
  test('should have an image with alt', () => { 
    
    const img = wrapper.find('img');
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });
  
  test('should have animate__fadeIn', () => { 
    
    const div = wrapper.find('div');
    
    expect(div.props().className).toContain('animate__fadeIn');
  });
});