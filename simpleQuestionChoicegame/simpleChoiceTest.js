/**
 * Created with JetBrains WebStorm.
 * User: karenfrancois
 * Date: 9/7/13
 * Time: 5:22 PM
 * To change this template use File | Settings | File Templates.
 */
var user = prompt("Question: What is it you want to do?, Go Forth, Back or Stay Still");
user.toUpperCase();
switch(user){

    case'Go Forth':
        console.log("You are a brave sole, my man!");
        break;
    case'Back':
        console.log("COWARDS!!!");
        break;
    case'Stay Still':
        console.log("Ok, you have time to think now.");
        break;
    default:
        console.log("Be a man and make up your mind!");
        break;
}