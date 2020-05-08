// JS for Random Displaying Meal
function displayRandomBeverage() {
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
    //console.log(drinkName);
    var drinkImage = response.drinks[0].strDrinkThumb;

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
    var recipeIngredientText = $("<p>").text(
      "Ingredients : " + drinkIngredient1 + " : " + drinkMeasure1
    );
    var recipeInstructionText = $("<p>").text(
      "Instructions : " + recipeInstructions
    );

    //Adding the API items to div on page
    drinkNameDiv.append(recipeNameText);
    drinkNameDiv.append(recipeImageDisplay);
    drinkNameDiv.append(recipeIngredientText);
    drinkNameDiv.append(recipeInstructionText);

    // console.log(recipeName);

    $("#beverage-view").prepend(drinkNameDiv);
    drinkNameDiv.prepend(image);

    //console.log(response.drinks[0])
  });
}

$("#beverage-bttn").on("click", displayRandomBeverage);

//displayRandomBeverage();
