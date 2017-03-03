<!DOCTYPE html>
<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
        <title>form ajax</title>
        <script>
            $(document).ready(function() {
                $('button').click(ajax);
            });
            function ajax() {
                $.ajax({
                    url: 'index_insert.php',
                    type: 'POST',
                    dataType: 'text',
                    data: {
                        title: $("#title").val(),
                        details: $("#details").val(),
                        timestamp: $("#timestamp").val(),
                        happiness: $("#happiness").val()
                    },
                    success: function(response) {
                        console.log('It works!', response);
                    }
                });
            }
        </script>
    </head>
    <body>
        <form>
            <input type="text" id='title' name="title" value="" placeholder="Title">
            <input type="text" id='details' name="details" value="" placeholder="Details">
            <input type="text" id='timestamp' name="timestamp" value="" placeholder="Timestamp">
            <input type="text" id='happiness' name="happiness" value="" placeholder="Happiness">
            <button type="button" name="button">Submit</button>
        </form>
    </body>
</html>