document.addEventListener('DOMContentLoaded', function() {
    Main();
}, false);

function Main()
{
    PrintStars();
}

function PrintStars()
{
    var languages = 4;
    var stars = [5.5, 3.5, 3, 4];
    var languageElements = ["cs", "html", "css", "js"];

    var fullStar =  "★";
    var halfStar =  "✬";
    var emptyStar = "☆";

    for (let i = 0; i < languages; i++) 
    {
        var starString = "";
        for (let j = 0; j < stars[i]; j++)
        {
            if (stars[i] % 1 != 0 && j == Math.floor(stars[i]))
            {
                starString += halfStar;
            }
            else
            {
                starString += fullStar;
            }
        }

        console.log(starString.length);

        //If the string has less than 6 characters, add empty star characters
        
        while(starString.length < 6)
        {
            starString += emptyStar;
        }

        console.log(languageElements[i] + ": " + starString);
        document.getElementById(languageElements[i]).innerHTML = starString;
        
        
    }
}