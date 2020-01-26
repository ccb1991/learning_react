import { connect } from 'react-redux'
import AddColorForm from './ui/AddColorForm'
import SortMenu from './ui/SortMenu'
import ColorList from './ui/ColorList'
import { addColor, sortColors, rateColor, removeColor } from '../actions'
import { sortFunction } from '../lib/array-helpers'

//通过容器调度的方法和使用store传递的最大不同就是
//容器通过传递函数的方法，实现了dispatch的统一调度

// AddColorFrom容器
export const NewColor = (props,{store})=>
    <AddColorForm onNewColor={(title,color)=>
    store.dispatch(addColor(title,color))}/>;

NewColor.contextTypes={
    store:PropTypes.object
};

export const Menu = (props,{store})=>
    <SortMenu sort={store.getState().sort}
              onSelect={sortBy=>
              store.dispatch(sortColors(sortBy))}/>;

Menu.contextTypes={
    store:PropTypes.object
};

export const Colors = (props,{store})=>{
    const {colors,sort}=store.getState();
    const sortedColors=[...colors].sort(sortFunction(sort));
    return (
        <ColorList colors={sortedColors}
                   onRemove={id=>
                   store.dispatch(removeColor(id))}
                   onRate={(id,rating)=>
                   store.dispatch(rateColor(id,rating))}/>
    )
};

Colors.contextTypes={
    store:PropTypes.object
};