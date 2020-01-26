import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom'
import './stylesheets/menus.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

export const MainMenu = () =>
    <nav className="main-menu">
        {/*NavLink组件可以用来创建链接*/}
        <NavLink to="/"><HomeIcon/></NavLink>
        {/*activeStyle属性可以用来设置链接激活或者被选中后的CSS样式*/}
        <NavLink to="/about" activeStyle={selectedStyle}>[About]</NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>[Events]</NavLink>
        <NavLink to="/products" activeStyle={selectedStyle}>[Products]</NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>[Contact Us]</NavLink>
    </nav>


//Route组件会路由参数至子组件，这边使用mathc解包
export const AboutMenu = ({ match }) =>
    <div className="about-menu">
        <li>
            <NavLink to="/about"
                  {/*   因为about路径会匹配about/history所以这里需要精确匹配*/}
                  style={match.isExact && selectedStyle}>
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history"
                  activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services"
                  activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location"
                  activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>
    </div>
