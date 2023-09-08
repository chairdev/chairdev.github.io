document.addEventListener('DOMContentLoaded', function() {
    Main();
}, false);

function Main()
{
    //Set age and study status
    document.getElementById("age").innerHTML = GetAge();
    document.getElementById("studyStatus").innerHTML = StudyStatus();
}

function GetAge() 
{
    //Get years since the 4th December 2005
    var birthday = new Date(2005, 11, 4);
    var today = new Date();
    var age = Math.floor((today-birthday) / (365.25 * 24 * 60 * 60 * 1000));
    return age;
}

function StudyStatus()
{
    //Get years since August 2022, until 2024
    var today = new Date();
    var years = today.getFullYear() - 2022;
    var studyYears = ["1st", "2nd", "3rd", "4th"];


    var text = "ERROR";
    if(years > 3)
    {
        text = "I graduated from";
        //document.getElementById("studyYears").innerHTML = studyYears[years] + " year";
    }
    else
    {
        text = "I am currently in my ";
        document.getElementById("studyYears").innerHTML = studyYears[years] + " year on";
    }
    
    return text;
}