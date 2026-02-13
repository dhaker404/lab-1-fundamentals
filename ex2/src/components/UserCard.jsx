import './UserCard.css'

function UserCard(props){
    const role = props.role;

    return (
        <div className = 'container'>
            <p>name : {props.name} </p>
            <p>email : {props.email} </p>
            <p>role : {role} </p>
            
        </div>
    )
}

export default UserCard