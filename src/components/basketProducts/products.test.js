import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import BasketProducts from '.'

configure({ adapter: new Adapter() })
    
describe('BasketProducts', () => {
    it('should render correctly', () => {
        const wrapper = mount(<BasketProducts />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})