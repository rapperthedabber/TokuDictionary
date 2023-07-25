export default function login(){
    return(
        <div>
            <h1>Welcome Back!</h1>
            <form action="/api/loginUser" method="post">
                <h1>username</h1>
                <input type="username" placeholder="username" name="username"></input>
                <h1>password</h1> 
                <input type="password" placeholder="password" name="password"></input>
                <button type="submit">Login</button>

            </form>
        </div>
    )
}