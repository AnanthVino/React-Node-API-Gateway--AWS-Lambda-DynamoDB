import React from 'react'
import loadable from '@loadable/component'

const BasketProducts = loadable(() => import('./components/basketProducts'))
const Header = loadable(() => import('./container/header'))

const App = () =>{
    return (
        <div className="App">
            <Header />
            <BasketProducts />
        </div>
    )
}

export default App