<?php

//$encrypted_pass = sha1('cheesepassword');
//print($encrypted_pass);
//$encrypted_pass = sha1('sloganspassword');
//print($encrypted_pass);
//$encrypted_pass = sha1('timpassword');
//print($encrypted_pass);
//$encrypted_pass = sha1('kittenpassword');
//print($encrypted_pass);
//$encrypted_pass = sha1('cakepassword');
//print($encrypted_pass);

$user_info = [
    ['id'=> 1, 'username'=>'cheeseislife', 'password' => 'f755833fc94668c23b007d91f5470e18d4177994'],
    ['id'=> 2, 'username'=>'mileslikesslogans', 'password' => '151d0f1bacdd04156000edee834d1aa158836489'],
    ['id'=> 3, 'username'=>'timgetsittogether', 'password' => 'ad73039a9617aa2bcac7de6a71f657b7d152744b'],
    ['id'=> 4, 'username'=>'kittensdocombat', 'password' => 'c286fb7a50e0c52a445c6fc4126de64e3a103931'],
    ['id'=> 5, 'username'=>'cakeisnotalie', 'password' => '048ec0611e699bec2635ec06fa28e08f733ca6e0']
];

$username = $_POST['username'];
$password = sha1($_POST['password']);

$output = [
    'success'=>['success'=>true, 'user_id'=>'null', 'message'=>'You have logged in successfully as ' . $username],
    'error'=>['success'=>false, 'message'=>'You are typing in the wrong thing']
];

for ($i = 0; $i < sizeof($user_info); $i++){
    if ($username === $user_info[$i]['username']){
        if ($password === $user_info[$i]['password']){
            $_SESSION['user_id'] = $user_info[$i]['id'];
            print_r(json_encode($output['success']));
            return;
        }
    }
}

$output_string = json_encode($output['error']);
print($output_string);

?>