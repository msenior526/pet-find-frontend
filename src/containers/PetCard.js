export default function PetCard(props) {
    const confirmUser = props.currentUser.user.username === props.owner.username;
    return (
    <li>
        <h5>{props.name}</h5>
        <p>{props.age}</p>
        <p>{props.species}</p>
        <p>{props.gender}</p>
        {confirmUser ? <button>delete pet</button> : null}
    </li>
)}