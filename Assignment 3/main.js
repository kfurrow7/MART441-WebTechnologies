function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Absolutely") {
        document.getElementById("story").innerHTML = "Now that I know you are a coffee lover like me, what kind of coffee do you prefer?";
        document.getElementById("choice1").innerHTML = "Hot hot coffee";
        document.getElementById("choice2").innerHTML = "Ice coffee is the only way to go";
    } else if (choice == 2 && answer2 == "Not for me") {
        document.getElementById("story").innerHTML = "I'm not offended that you don't love coffee, so do you prefer a different drink choice?'";
        document.getElementById("choice1").innerHTML = "Tea is always safe";
        document.getElementById("choice2").innerHTML = "I like somehing along the lines of a milkshake";
    } else if (choice == 1 && answer1 == "Hot hot coffee") {
        document.getElementById("story").innerHTML = "Even though you prefer hot coffee, could the weather effect your coffee order?";
        document.getElementById("choice1").innerHTML = "Yes, the weather effects my coffee order";
        document.getElementById("choice2").innerHTML = "No, it's in my morning routine to drink hot coffee when I wake up.";
    } else if (choice == 2 && answer2 == "Ice coffee is the only way to go") {
        document.getElementById("story").innerHTML = "If there is a blizzard outside, will you still order an iced coffee?'";
        document.getElementById("choice1").innerHTML = "Ice coffee is just a staple.";
        document.getElementById("choice2").innerHTML = "I will make an exception";
    } else if (choice == 1 && answer1 == "Yes, the weather effects my coffee order") {
        document.getElementById("story").innerHTML = "I think it's time for some food now. Do you prefer eating breakfast with your coffee?'";
        document.getElementById("choice1").innerHTML = "Yes, I need a full meal";
        document.getElementById("choice2").innerHTML = "Just something small like a muffin will be do.";
    } else if (choice == 2 && answer2 == "No, it's in my morning routine to drink hot coffee when I wake up.") {
        document.getElementById("story").innerHTML = "What else do you do during your morning routine?";
        document.getElementById("choice1").innerHTML = "Watch some tv on the couch";
        document.getElementById("choice2").innerHTML = "Go get a morning workout in.";
    }

    else if (choice == 1 && answer1 == "Yes, I need a full meal") {
        document.getElementById("story").innerHTML = "Do you want to get another coffee?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes another one doesn't hurt...restart";
        document.getElementById("choice2").innerHTML = "Nope, one is all I need...quit";
    } else if (choice == 2 && answer2 == "Just something small like a muffin will be do.") {
        document.getElementById("story").innerHTML = "Do you want to get another coffee?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes another one doesn't hurt...restart";
        document.getElementById("choice2").innerHTML = "Nope, one is all I need...quit";
    } else if (choice == 1 && answer1 == "Ice coffee is just a staple.") {
        document.getElementById("story").innerHTML = "Time for another ice coffee?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "I will make an exception") {
        document.getElementById("story").innerHTML = "Maybe try hot coffee more often?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Sure, why not...restart";
        document.getElementById("choice2").innerHTML = "Not a chance...quit";
    } else if (choice == 1 && answer1 == "Tea is always safe") {
        document.getElementById("story").innerHTML = "I guess I can try tea sometime, should we go back?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes lets do it... restart";
        document.getElementById("choice2").innerHTML = "Lets just go another day... quit";
    } else if (choice == 2 && answer2 == "I like somehing along the lines of a milkshake") {
        document.getElementById("story").innerHTML = "Does starbucks have milkshakes?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "I'm not sure, lets go back...restart";
        document.getElementById("choice2").innerHTML = "Lets go to Dairy Queen instead...quit";
    } else if (choice == 1 && answer1 == "Watch some tv on the couch") {
        document.getElementById("story").innerHTML = "Want to watch the latest season of the Bachelor?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes, we have too...restart";
        document.getElementById("choice2").innerHTML = "No, that's the worst show ever..quit";
    } else if (choice == 2 && answer2 == "Go get a morning workout in.") {
        document.getElementById("story").innerHTML = "Do you want to lift weights or go on a hike?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Lets go on a hike...restart";
        document.getElementById("choice2").innerHTML = "Today is my rest day...quit.";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "First things first, are you a coffee lover?";
        document.getElementById("choice1").innerHTML = "Absolutely";
        document.getElementById("choice2").innerHTML = "Not for me";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Thanks for getting coffee with me!";

    }


}
