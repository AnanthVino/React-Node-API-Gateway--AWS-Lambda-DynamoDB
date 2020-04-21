import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '.'

configure({ adapter: new Adapter() })
    
describe('Header', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper).toMatchSnapshot()
    })
})