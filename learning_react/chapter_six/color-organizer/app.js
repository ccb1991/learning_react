class App extends Component{
    constructor(props){
        super(props);
        this.state={
            color:[]
        }
    }

    render(){
        const {colors}=this.state;
        return(
            <div className="app">
                <AddColorForm/>
                <ColorList color={colors}/>
            </div>
        )
    }
}