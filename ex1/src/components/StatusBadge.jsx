    
    
function StatusBadge(){
    <p>hiiiiiiiiiiiiiiiiiiiii</p>
    const isOnline = false;
    return(
        <div>

            {isOnline ? (
                    <p style = {{ color : 'green'}}> 👽 Online </p>
                ) : (
                    <p style = {{ color : 'red'}}>  🥀 Offline </p>
                )
            }

            <p>
                User is {isOnline ? 'Online' : 'Offline'}
            </p>

        </div>

    )

}

export default StatusBadge