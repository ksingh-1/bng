// JS for Displaying Random Meal

//Modal Init
// $(document).ready(function () {
//     $('.modal').modal();
// });
//Initializing Materialize Collapsible
function displayRandomMeal() {

    // $(document).ready(function () {
    //     $('.collapsible').collapsible();
    // });

    $("#meal-view").html("")

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



        //Ingredients Display???????
        var recipeIngredientsDiv = $("<ul>").text("Ingredients : ")

        var recipeIngredient1 = response.meals[0].strIngredient1
        var recipeMeasure1 = response.meals[0].strMeasure1
        var recipeIngredient2 = response.meals[0].strIngredient2
        var recipeMeasure2 = response.meals[0].strMeasure2

        // var ingredientsArray = ""
        // var ingredientsMeasureArray = ""


        //For loop for pulling Ingredients







        var pullingIngredients = response.meals[0]

        console.log(pullingIngredients)

        var recipeYoutube = response.meals[0].strYoutube
        var recipeInstructions = response.meals[0].strInstructions

        $("img").addClass("imageSize")
        //Generating text for display
        var recipeNameText = $("<h5>").text(recipeName);
        var recipeImageDisplay = $('<img class="imageSize">').attr("src", recipeImage);
        var recipeIngredientText = $("<li>").text(recipeIngredient1 + " : " + recipeMeasure1 + ", " + recipeIngredient2 + " : " + recipeMeasure2)


        //Materialize Dropdown text test variables
        var instructionsDiv = $("<ul>").text("").addClass("collapsible")
        var recipeInstructionList = $("<li>").text("")
        var recipeInstructionHeader = $("<div>").text("Instructions (Click/Tap to Expand): ").addClass("collapsible-header card red lighten-3")
        var recipeInstructionText = $("<div>").text(recipeInstructions).addClass("collapsible-body")

        // YouTube Link
        var youTubeLinkDiv = $("<div>").text("")
        var recipeYoutubeLink = $("<a>").text("Click/Tap to Open YouTube").attr("href", recipeYoutube).attr("target", '_blank').addClass("wave-effect waves-light btn")

        //Embed Version
        // var youTubeWindow = $("<iframe>").attr("src", recipeYoutube.replace("watch?v=", "embed/"))







        //Adding the API items to div on page
        recipeNameDiv.append(recipeNameText);
        recipeNameDiv.append(recipeImageDisplay);
        // recipeNameDiv.append(recipeIngredientText);

        //Adding YouTube Link to Div
        youTubeLinkDiv.append(recipeYoutubeLink)

        //Embeded Version
        // youTubeLinkDiv.append(youTubeWindow)

        //Adds li to ul Ingredients list
        recipeIngredientsDiv.append(recipeIngredientText)

        //Adds li to ul instructions
        instructionsDiv.append(recipeInstructionList);
        //Adds collapsible header to li element
        recipeInstructionList.append(recipeInstructionHeader);
        //Adds collapsible body to li element
        recipeInstructionList.append(recipeInstructionText);



        console.log(recipeName)


        $("#meal-view").prepend(instructionsDiv)
        $("#meal-view").prepend(recipeIngredientsDiv)
        $("#meal-view").prepend(youTubeLinkDiv)
        $("#meal-view").prepend(recipeNameDiv)



        console.log(response.meals[0])
        //Collapsible Init
        $('.collapsible').collapsible();



    });
}

$("#meal-bttn").on("click", displayRandomMeal);

// displayRandomMeal();
