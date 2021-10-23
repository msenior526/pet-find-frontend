export const PetCard = props => {
    return (
    <li>
        <h5>{props.name}</h5>
        <p>{props.age}</p>
        <p>{props.species}</p>
        <p>{props.gender}</p>
    </li>
)}