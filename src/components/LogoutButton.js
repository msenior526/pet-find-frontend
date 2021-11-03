import { useHistory } from "react-router-dom"
export const LogoutButton = props => {
    const history = useHistory();
  
    const handleClick = () => {
        debugger
        console.log(props.logout());
        history.push("/")
    };

    return (
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}