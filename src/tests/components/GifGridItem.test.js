import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../componets/GifGridItem';

describe('Test in <GifGridItem />', () => {

    const title = 'One Title';
    const url = 'https://localhost/alto.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )

    test('should be the component conrectly', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should be a paragraph with title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    })

    test('should be the img with src and alt props of component', () => {
        const img = wrapper.find('img');
        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );
    })

    test('should have animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn').toBe(true))
    })
    
    

 
    
    
    
})