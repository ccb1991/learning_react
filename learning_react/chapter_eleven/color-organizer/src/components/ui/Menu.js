import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../../stylesheets/Menu.scss'

const selectedStyle = { color: 'red' }

//match是router组件的属性之一
const Menu = ({ match }) =>
    <nav className="menu">
        <NavLink to="/" style={match.isExact && selectedStyle}>date</NavLink>
        <NavLink to="/sort/title" activeStyle={selectedStyle}>title</NavLink>
        <NavLink to="/sort/rating" activeStyle={selectedStyle}>rating</NavLink>
    </nav>

Menu.propTypes = {
    sort: PropTypes.string
}

export default Menu
