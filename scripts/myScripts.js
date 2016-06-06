//Global variables
var index;
var classIndex = 0;
//AJAX/JSON files to pull the required content
$(document).ready(function() {
    $.ajax({
      url: "https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json",
      dataType: 'json',
      success: function(data){
        index = data; //Renames it to a global level so you can use it outside the function
        init(); //Starts the functions
        console.log(data);
    },//End of Success
    statusCode: {
      404: function(){
        alert('Error, Please try again later!');
      }//end of 404
    }//End of Status code
  });//End of AJAX
});//End of $document ready
//Function to start everything that goes on during the time the user is there
function init() {
  //Creates new Div underneath the div in the HTML code and creates both the buttons, previous and next
  $('#nuCohort').append("<div id='newDiv'><p id='information'></p><p id='number'></p><button id='previous'>Previous</button><button id='next'>Next</button></div>");
  //Makes it so the information from the JSON Object is displayed on the DOM so the user can see
  $('#information').text(index.students[classIndex].first_name + " " + index.students[classIndex].last_name + " " + index.students[classIndex].city + " " + index.students[classIndex].shoutout);
  //Allows the user to see which number they are on for each student
  $('#number').text("(" + Number(classIndex + 1) + "/20)");
  //Allows the user to press previous and goes from each object
  $('#previous').click(function(){
    //fade in and out of each new student
    $('#information').fadeOut("slow").fadeIn("slow", function(){
    if (classIndex == 0) {classIndex = index.students.length;}
    $('#newDiv').remove();
    //subtracts 1 from the classIndex to go to the previous person
    classIndex--;
    init();
  });// End of FadeOut/FadeIn Function
  });//End of previous button
  //Allows the user to press next to go to the next student
  $('#next').click(function(){
    //Fades in and out of each new student
    $('#information').fadeOut("slow").fadeIn("slow", function(){
    if (classIndex == index.students.length-1) {classIndex = -1;}
    $('#newDiv').remove();
    //adds 1 to the classIndex to go the next person
    classIndex++;
    init();
  });//End of FadeOut/FadeIn Functions
});//End of next function
}//end of init function
