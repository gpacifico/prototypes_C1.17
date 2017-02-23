Place your queries below

SELECT * FROM `students` WHERE `username` = 'miles'
UPDATE `students` SET `email` = 'milesmakesprettywebsitesyay@gmail.com' WHERE `username` = 'milesmakespretty'
INSERT INTO `students` SET `id` = 11, `name` = 'Jason', `email` = 'jasonisamarker@gmail.com', `age` = 25, `SSN` = 978645123, `username` = 'jasonisamarker', `password` = sha1('jasonisamrkerpassword'), `joined` = NOW(), `status` = 'active'
DELETE FROM `students` WHERE `username` = 'jasonisamarker'

SELECT * FROM `todo_items` WHERE `user_id` = 7
INSERT INTO `todo_items` SET `title` = 'car', `details` = 'wash car', `timestamp` = now(), `user_id` = 7
DELETE FROM `todo_items` WHERE `user_id` = 7 AND `title` = 'vacuum'
UPDATE `todo_items` SET `details` = 'wax Honda' WHERE `user_id` = 7
SELECT * FROM `students` WHERE `id` = 7