export default function Friend({friend}){
    // const {name, email} = friend;
    return(
        <div>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
             <p>Phone: {friend.phone}</p>
        </div>
    )
}