import './UserCard.css'

function Card(title, children){

    return(
        <div className = "container">
            <h2>{title}</h2>
            <div>
                {children}
            </div>
        </div>
    )

}

export default Card