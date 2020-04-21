import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import BasketTotals from '.'

configure({ adapter: new Adapter() })

const products = [
    {
        'id': 1,
        'subtotal': 1100,
        'quantity': 1,
        'name': 'Apple iPhone 11 (Green, 128 GB)',
        'price': 1100,
        'size': '15.49 cm',
        'camera': '12MP + 12MP | 12MP Front Camera',
        'currency': '$',
        'image': 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/u/z/t/iphone-11-256-c-mwmd2hn-a-apple-0-original-imafkg24wszdhzy3.jpeg?q=70'
    }
]
    
describe('BasketTotals', () => {
    it('should render correctly', () => {
        const wrapper = mount(<BasketTotals products={products}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('reset basket product click event', () => {
        let props = {
            setProducts: jest.fn()
        }
    
        const wrapper = mount(<BasketTotals products={products} {...props}/>)
        wrapper.find('button').at(0).simulate('click')
        expect(props.setProducts).toBeCalled()
    })

    it('reset basket product click event', () => {
        let props = {
            setProducts: jest.fn()
        }
    
        const wrapper = mount(<BasketTotals products={products} {...props}/>)
        wrapper.find('button').at(0).simulate('click')
        expect(props.setProducts).toBeCalled()
    })
})