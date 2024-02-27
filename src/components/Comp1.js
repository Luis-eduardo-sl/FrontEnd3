import Title from "./Title"
import Desc from "./Desc"
import Price from "./Price"
import Power from "./Power"
import Pick from "./Pick"
import Link from "./Link"

function Comp1 (props){
    return(
        <div>
            <Pick Pick= {props.Pick}/>
            <Title Title= {props.Title}/>
            <Desc Desc= {props.Desc}/>
            <Price Price= {props.Price}/>
            <Power Power= {props.Power}/>
            <Link Link= {props.Link}/>
        </div>
    )
}

export default Comp1