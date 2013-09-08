/**
 * Created with JetBrains WebStorm.
 * User: karenfrancois
 * Date: 9/7/13
 * Time: 8:35 PM
 * To change this template use File | Settings | File Templates.
 */
var user = prompt("Question: What is it you want to do?, Go Forth, Back or Stay Still");
user.toUpperCase();
var money = true;
var stupid = false;
switch(user){

    case'Go Forth':
        document.write('You are a brave sole, my man!');
        if (money || stupid ){

            document.write("The only two reasons anyone should do anything in this world. For the love of money and stupidity.");
        }
        else{

            document.write("What The F***???!!");
        }
        break;
    case'Back':
        document.write("COWARDS!!!");
        if ('Back' && stupid){

            document.write("This is a smart guy that will live for a long time.");
        }
        break;
    case'Stay Still':
        document.write("Ok, you have time to think now.");
        break;
    default:
        document.write("Be a man and make up your mind!");
        break;
}