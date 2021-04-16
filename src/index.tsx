import ReactDom from 'react-dom'
import './index.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

ReactDom.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>,
    document.getElementById("root")
)