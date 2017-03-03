//require your modules: express, and mysql
var express = require('express');
var mysql = require('mysql');
var fs = require('fs');
var app = express();
//define your connection info for mysql
function handleRequest(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'c1.17db'
    });

//define your handler for your mysql connection callback
	//perform your mysql query call
    function connected_callback() {
        connection.query('SELECT * FROM students', query_callback);
    }

//define your handler for your mysql query call response
	//handle your data from your response
	//return the data in json format to the front end request
    function query_callback(err, rows, fields) {
        console.log(rows);
        res.send(rows);
    }

//define your handler for the express web request
    connection.connect(connected_callback);
}

    app.get('/api', handleRequest);

    app.get('/', function(req, res){
        fs.readFile('index.html', function(err, data){
            if (err){
                console.log('sorry, error serving file');
            }
            else{
                res.end(data);
            }
        })
    });

//set up your express server and start listening
    app.listen(3306, function(){
        console.log('Totally listening on port 3306');
    });