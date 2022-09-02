const formSignUp=(
    <form action="add.php" method="POST">
        <h1>Sign up</h1>
        <label><b>First Name</b></label>
        <input type="input" name="firstname" required></input>
        <label><b>Last Name</b></label>
        <input type="input" name="lastname" required></input>
        <label><b>Username</b></label>
        <input type="input" name="username" required></input>
        <label><b>Email</b></label>
        <input type="input" name="email" required></input>
        <label><b>Password</b></label>
        <input type="password" name="password" required></input>
        <input type="submit" id="submit" value="Sign up"></input>
    </form>
)
ReactDOM.render(formSignUp, document.getElementById("formSign"));
