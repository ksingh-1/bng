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

    var dataObject = {};
    var ingredientArray = [];
    var measurementArray = [];

    // For loop for pulling Ingredients removing all empty/null values
    for (var data in response.drinks[0]) {
      if (response.drinks[0][data]) {
        dataObject[data] = response.drinks[0][data];
      }
    }

    ingredientArray = Object.entries(dataObject).filter((data) => {
      return data[0].startsWith("strIngredient");
    });

    //console.dir(ingredientArray);
    measurementArray = Object.entries(dataObject).filter((data) => {
      return data[0].startsWith("strMeasure");
    });

    //var dataArray = ingredientArray.concat(measurementArray);

    //console.dir(measurementArray);

    var recipeIngredientsDiv = $("<ul>").addClass("collapsible");
    var recipeIngredientList = $("<li>");
    var recipeIngredientBody = $("<div>").addClass("collapsible-body");
    var recipeIngredientHeader = $("<div>")
      .text("Ingredients (Click/Tap to Expand): ")
      .addClass("collapsible-header card blue lighten-3");

    ingredientArray.forEach((ingredient, index) => {
      var ingredientName = ingredient[1];
      var measurement = measurementArray[index][1];
      var recipeIngredientText = $("<li>").text(
        ingredientName + " : " + measurement
      );
      recipeIngredientBody.append(recipeIngredientText);
    });

    recipeIngredientsDiv.append(recipeIngredientList);
    recipeIngredientList.append(recipeIngredientHeader);
    recipeIngredientList.append(recipeIngredientBody);

    // var recipeIngredientBody = $("<div>").text("").addClass("collapsible-body");

    var recipeInstructions = response.drinks[0].strInstructions;

    $("img").addClass("imageSize");
    //Generating text for display
    var recipeNameText = $("<h5>").text(drinkName);
    var recipeImageDisplay = $('<img class="imageSize materialboxed">').attr(
      "src",
      drinkImage
    );

    //Materialize Dropdown text test variables
    var instructionsDiv = $("<ul>").text("").addClass("collapsible");
    var recipeInstructionList = $("<li>").text("");
    var recipeInstructionHeader = $("<div>")
      .text("Instructions : ")
      .addClass("collapsible-header card blue lighten-3");
    var recipeInstructionText = $("<div>")
      .text(recipeInstructions)
      .addClass("collapsible-body");

    //Adding the API items to div on page
    drinkNameDiv.append(recipeNameText);
    drinkNameDiv.append(recipeImageDisplay);
    // drinkNameDiv.append(recipeIngredientText);
    // drinkNameDiv.append;(recipeInstructionText)

    //Adds li to ul Ingredients list
    // recipeIngredientsDiv.append(recipeIngredientText);

    //Adds li to ul instructions
    instructionsDiv.append(recipeInstructionList);
    //Adds collapsible header to li element
    recipeInstructionList.append(recipeInstructionHeader);
    //Adds collapsible body to li element
    recipeInstructionList.append(recipeInstructionText);

    $("#beverage-view").prepend(instructionsDiv);
    $("#beverage-view").prepend(recipeIngredientsDiv);
    $("#beverage-view").prepend(drinkNameDiv);

    //console.log(response.drinks[0])

    // console.log(document.querySelectorAll("collapsible"));
    // console.log(response.meals[0]);
    // //Collapsible Init
    $(".collapsible").collapsible();
    $(".materialboxed").materialbox();
  });
}

$("#beverage-bttn").on("click", displayRandomBeverage);

//displayRandomBeverage();
