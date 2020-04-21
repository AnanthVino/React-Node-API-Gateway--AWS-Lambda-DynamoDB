import ReactDOM from 'react-dom'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { RenderToDOM } from './index'

configure({ adapter: new Adapter() })

describe('test ReactDOM render', () => {
    const originalRender = ReactDOM.render
    
    beforeEach(() => {
        ReactDOM.render = jest.fn()
    })
    afterAll(() => {
        ReactDOM.render = originalRender
    })
    it('should call ReactDOM render', () => {
        RenderToDOM()
        expect(ReactDOM.render).toHaveBeenCalled()
    })
})

