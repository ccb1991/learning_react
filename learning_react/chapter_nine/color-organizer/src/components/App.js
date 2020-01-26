// import AddColorForm from './ui/AddColorForm'
// import SortMenu from "./SortMenu";
// import ColorList from "./ColorList"
//
//
// const App=({store})=>
//     <div className="app">
//         <SortMenu store={store}/>
//         <AddColorForm store={store}/>
//         <ColorList store={store}/>
//     </div> ;
//
//
// export default App

import { PropTypes, Component} from'react '
import SortMenu from'./ui/SortMenu'
import ColorList from './ui/ColorList'
import AddColorForm from'./ui/AddColorform'
import { sortFunction} from '../lib/array-helpers'


class App extends Component{

    static propTypes={
        store:PropTypes.object.isRequired
    };

    static childContextTypes={
        store:PropTypes.object.isRequired
    };

    getChildContext(){
        return{
            store:this.props.store
        }
    }

    componentWillMount(){
        this.unsubscribe=store.subscribe(
            ()=>this.forceUpdate()
        )
    }

    componentWillUnmount(){
        this.unsubscribe()
    }

    render(){
        const {colors,sort}=store.getState();
        const sortedColors=[...Colors].sort(sortFunction(sort));
        return(
            <div className="app">
                <SortMenu/>
                <AddColorForm/>
                <ColorList colors={sortedColors}/>
            </div>
        )
    }
}

export default App