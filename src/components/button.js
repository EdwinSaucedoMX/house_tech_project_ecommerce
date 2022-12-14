import '../App.css';

function Btn(params){
    let color = params.color ? "bg-" + params.color : "";
    return(<button className= {"App-btn " + color}>
        {params.text}
        </button>
    );
}

export default Btn;
