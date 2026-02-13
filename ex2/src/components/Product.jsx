import './UserCard.css'

function Product(props){

    return(
        <div className = "container">
            <p>
                {props.name} : 
                ${props.price} ,  
                {props.inStocks ? "in stock" : "out of Socks"} ,
                {props.stars} stars
            </p>
            
        </div>
    )
}

export default Product