import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import FaTrash from 'react-icons/lib/fa/trash-o'
import '../../stylesheets/Color.scss'

class Color extends Component {

    render() {
        const { id, title, color, rating, timestamp, onRemove, onRate, history } = this.props
        return (
            <section className="color" style={this.style}>
                <h1 ref="title"
                    onClick={() => history.push(`/${id}`)}>{title}</h1>
                <button onClick={onRemove}>
                    <FaTrash />
                </button>
                <div className="color"
                     onClick={() => history.push(`/${id}`)}
                     style={{ backgroundColor: color }}>
                </div>
                <TimeAgo timestamp={timestamp} />
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }

}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

Color.defaultProps = {
    rating: 0,
    onRemove: f=>f,
    onRate: f=>f
}

//withRouter可以用来给某个Route下任意被渲染的组件添加路由属性
//当导出Color组件时，我们是将它和Router一起发送的，后者会将它
//包装成能够传递router属性的组件：match、history和location
//withRouter是一个高级组件，接收一个react组件作为参数，返回一个react组件
export default withRouter(Color)
