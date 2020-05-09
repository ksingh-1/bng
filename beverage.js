// JS for Random Displaying Beverage

//Modal Init
// $(document).ready(function () {
//     $('.modal').modal();
// });
//Initializing Materialize Collapsible
function displayRandomBeverage() {
  // $(document).ready(function () {
  //     $('.collapsible').collapsible();
  // });

  $("#beverage-view").html("");

  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  // Create AJAX call for drink button bring clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // Div for Drink to display
    var drinkNameDiv = $("<div class='drink'>");

    //Calling from API
    var drinkName = response.drinks[0].strDrink;
    var drinkImage = response.drinks[0].strDrinkThumb;

    //Ingredients Display???????
    var recipeIngredientsDiv = $("<ul>").text("Ingredients : ");

    var drinkIngredient1 = response.meals[0].strIngredient1;
    var drinkMeasure1 = response.meals[0].strMeasure1;
    var drinkIngredient2 = response.meals[0].strIngredient2;
    var drinkMeasure2 = response.meals[0].strMeasure2;

    var drinkIngredient1 = response.drinks[0].strIngredient1;
    var drinkMeasure1 = response.drinks[0].strMeasure1;

    var recipeInstructions = response.drinks[0].strInstructions;

    $("img").addClass("imageSize");
    //Generating text for display
    var recipeNameText = $("<h5>").text(drinkName);
    var recipeImageDisplay = $('<img class="imageSize">').attr(
      "src",
      drinkImage
    );
    var recipeIngredientText = $("<li>").text(
      "Ingredients : " +
        drinkIngredient1 +
        " : " +
        drinkMeasure1 +
        " : " +
        drinkIngredient2 +
        " : " +
        drinkMeasure2
    );
    var recipeInstructionText = $("<li>").text(
      "Instructions : " + recipeInstructions
    );

    //Materialize Dropdown text test variables
    var instructionsDiv = $("<ul>").text("").addClass("collapsible");
    var recipeInstructionList = $("<li>").text("");
    var recipeInstructionHeader = $("<div>")
      .text("Instructions : ")
      .addClass("collapsible-header card red lighten-3");
    var recipeInstructionText = $("<div>")
      .text("Instructions : " + recipeInstructions)
      .addClass("collapsible-body");

    //Adding the API items to div on page
    drinkNameDiv.append(recipeNameText);
    drinkNameDiv.append(recipeImageDisplay);
    drinkNameDiv.append(recipeIngredientText);
    drinkNameDiv.append(recipeInstructionText);

    //Adds li to ul Ingredients list
    recipeIngredientsDiv.append(recipeIngredientText);

    //Adds li to ul instructions
    instructionsDiv.append(recipeInstructionList);
    //Adds collapsible header to li element
    recipeInstructionList.append(recipeInstructionHeader);
    //Adds collapsible body to li element
    recipeInstructionList.append(recipeInstructionText);

    $("#beverage-view").prepend(drinkNameDiv);
    drinkNameDiv.prepend(image);

    //console.log(response.drinks[0])

    console.log(document.querySelectorAll("collapsible"));
    console.log(response.meals[0]);
    //Collapsible Init
    $(".collapsible").collapsible();
  });
}

$("#beverage-bttn").on("click", displayRandomBeverage);

//displayRandomBeverage();
