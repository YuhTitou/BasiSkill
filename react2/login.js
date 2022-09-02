const formLogin=(
    <form action="check.php" method="POST">
        <h1>Login</h1>
        <label><b>Username</b></label>
        <input type="input" name="username" required></input>
        <label><b>Password</b></label>
        <input type="password" name="password" required></input>
        <input type="submit" id="submit" value="Login"></input>
    </form>
);

ReactDOM.render(formLogin, document.getElementById("formLog"))