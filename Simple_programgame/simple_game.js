/**
 * Created with JetBrains WebStorm.
 * User: karenfrancois
 * Date: 9/7/13
 * Time: 6:06 PM
 * To change this template use File | Settings | File Templates.
 */
var user = prompt("Question: What is it you want to do?, Go Forth, Back or Stay Still");
user.toUpperCase();
var money = true;
var stupid = false;
switch(user){

    case'Go Forth':
        console.log("You are a brave sole, my man!");
        if (money || stupid ){

            console.log("The only two reasons anyone should do anything in this world. For the love of money and stupidity.");
        }
        else{

            console.log("What The F***???!!");
        }
        break;
    case'BACK':
        console.log("COWARDS!!!");
        if ('Back' && stupid){

            console.log("This is a smart guy that will live for a long time.");
        }
        break;
    case'Stay Still':
        console.log("Ok, you have time to think now.");
        break;
    default:
        console.log("Be a man and make up your mind!");
        break;
}