<!--login_form.php-->
<!DOCTYPE html>
<html>
    <head>
        <title>User Auth</title>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script>
            function to_login(){
                $.ajax({
                    url: 'login_handler.php',
                    data: {"username": $('#username').val(), "password": $('#password').val()},
                    cache: "false",
                    method: "post",
                    dataType: "json",
                    success: function(response){
                        console.log(response);
                    },
                    error: function(error){
                        console.log(error);
                    }
                })
            }
        </script>
    </head>
    <body>
        <form>
            <input id="username" type="text" name="username" placeholder="Enter Username">
            <br>
            <input id="password" type="text" name="password" placeholder="Enter Password">
            <br>
            <button type="button" onclick="to_login()">Log In</button>
        </form>
    </body>
</html>