import axios from "axios"
export default function signUp(){
    
    return(
        <form action="/api/postUser" method="post" >
            <h1>username</h1>
            <input type = 'username' placeholder="username" name="username"></input>
            <h1>Password</h1>
            <input type="password" placeholder="password" name="password"></input>
            <button type="submit" >Sign up</button>
        </form>
    )
}