// let's create an empty array. We will add to this later
var myViewFinderArray = new Array();
var imageNames = ["image1", "image2", "image3", "image4"];

// this is the main ViewFinder class
class ViewFinder
{
    // the constructor requires only one title, the description, imagePath, etc.
    // we will create multiple objects from this class
    constructor(title)
    {
        this.title = title;
    }

    // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
    toString()
    {
        return "Title: " + this.title;
    }

    // this is the property theTitle which returns the title as well only the title
    get theTitle()
    {
        return this.title;
    }

}

// this function is called in the body of the HTML page so that the objects are created and added to the
// array myViewFinderArray
function initializeArray()
{
    // create the first object from the class ViewFinder
    var myViewFinder = new ViewFinder("Donna Bassin");
    var img = document.createElement("img");
   img.src = "images/SJpic.jpg";
    var myViewFinder1 = new ViewFinder("A really angry tiger");
    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    // add the second object to the array
    myViewFinderArray.push(myViewFinder1);

}

// this function gets an object from the array and puts it into the element with the id title
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}

function createRandomImageArray()
{
    var actualImagePath = ["images/SJpic1.jpg", "images/SJpic2.webp"];

    var count = [0,0];

    while(actualImages.length < 4)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}
