

// JS for Displaying Random Meal
function displayRandomMeal() {

    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";


    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        //Creating Div for Recipe to display
        var recipeNameDiv = $("<div class='recipe'>");

        //Calling Items needed from API
        var recipeName = response.meals[0].strMeal
        var recipeImage = response.meals[0].strMealThumb

        var recipeIngredient1 = response.meals[0].strIngredient1
        var recipeMeasure1 = response.meals[0].strMeasure1


        var recipeYoutube = response.meals[0].strYoutube
        var reciepInstructions = response.meals[0].strInstructions

        $("img").addClass("imageSize")
        //Generating text for display
        var recipeNameText = $("<h5>").text(recipeName);
        var recipeImageDisplay = $('<img class="imageSize">').attr("src", recipeImage);
        var recipeIngredientText = $("<p>").text("Ingredients : " + recipeIngredient1 + " : " + recipeMeasure1)
        var recipeInstructionText = $("<p>").text("Instructions : " + reciepInstructions)
        var recipeYoutubeLink = $("<p>").text("Instruction YouTube Link (if applicable) : " + recipeYoutube)


        //Adding the API items to div on page
        recipeNameDiv.append(recipeNameText);
        recipeNameDiv.append(recipeImageDisplay);
        recipeNameDiv.append(recipeIngredientText)
        recipeNameDiv.append(recipeYoutubeLink)
        recipeNameDiv.append(recipeInstructionText)


        console.log(recipeName)

        $("#meal-view").prepend(recipeNameDiv);
        recipeNameDiv.prepend(image);



        console.log(response.meals[0])

    });
}

$("#meal-bttn").on("click", displayRandomMeal);

// displayRandomMeal();
