// JS for Displaying Random Meal

//Modal Init
// $(document).ready(function () {
//     $('.modal').modal();
// });
//Initializing Materialize Collapsible
function displayRandomMeal() {



    $("#meal-view").html("")

    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";


    //  //Non Alcoholic Drink Function

    //     //var adult = true;
    //     var adult = false;

    //     //selected yes on modal to being adult
    //     if (adult) {
    //         var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    //     } else {
    //         var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    //     }

    //     //DRINKS
    //     $.ajax({
    //         url: drinkURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         var nonAlcoholDrinkArray = response.drinks;
    //         var randomDrinkId = nonAlcoholDrinkArray[Math.floor(Math.random() * nonAlcoholDrinkArray.length)];
    //         var randomDrinkArray = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + randomDrinkId["idDrink"];


    //         $.ajax({
    //             url: randomDrinkArray,
    //             method: "GET"


    //         }).then(function (response) {

    //             var nonAlcoholicDrink = response.drinks


    //             console.log(nonAlcoholicDrink);
    //         });


    //         //Copy current alcoholic drink display here




    //     });




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


        var dataObject = {};
        var ingredientArray = [];
        var measurementArray = [];

        // For loop for pulling Ingredients removing all empty/null values
        for (var data in response.meals[0]) {
            if (response.meals[0][data]) {
                dataObject[data] = response.meals[0][data];
            }
        }

        ingredientArray = Object.entries(dataObject).filter(data => {
            return data[0].startsWith("strIngredient");
        });

        //console.dir(ingredientArray);
        measurementArray = Object.entries(dataObject).filter(data => {
            return data[0].startsWith("strMeasure");
        });

        //var dataArray = ingredientArray.concat(measurementArray);

        //console.dir(measurementArray);

        var recipeIngredientsDiv = $("<ul>").addClass("collapsible")
        var recipeIngredientList = $("<li>")
        var recipeIngredientBody = $("<div>").addClass("collapsible-body");
        var recipeIngredientHeader = $("<div>").text("Ingredients (Click/Tap to Expand): ").addClass("collapsible-header card red lighten-3")

        ingredientArray.forEach((ingredient, index) => {
            var ingredientName = ingredient[1];
            var measurement = measurementArray[index][1];
            var recipeIngredientText = $("<li>").text(ingredientName + " : " + measurement);
            recipeIngredientBody.append(recipeIngredientText);
        });


        recipeIngredientsDiv.append(recipeIngredientList);
        recipeIngredientList.append(recipeIngredientHeader);
        recipeIngredientList.append(recipeIngredientBody);


        // var recipeIngredientBody = $("<div>").text("").addClass("collapsible-body");


        var recipeYoutube = response.meals[0].strYoutube
        var recipeInstructions = response.meals[0].strInstructions

        $("img").addClass("imageSize")
        //Generating text for display
        var recipeNameText = $("<h5>").text(recipeName);
        var recipeImageDisplay = $('<img class="imageSize">').attr("src", recipeImage);




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


        //Adds li to ul instructions
        instructionsDiv.append(recipeInstructionList);
        //Adds collapsible header to li element
        recipeInstructionList.append(recipeInstructionHeader);
        //Adds collapsible body to li element
        recipeInstructionList.append(recipeInstructionText);

        //Adds li to ul instructions





        // console.log(recipeName)


        $("#meal-view").prepend(instructionsDiv)
        $("#meal-view").prepend(recipeIngredientsDiv)
        $("#meal-view").prepend(youTubeLinkDiv)
        $("#meal-view").prepend(recipeNameDiv)



        // console.log(response.meals[0])
        //Collapsible Init
        $('.collapsible').collapsible();



    });
}

$("#meal-bttn").on("click", displayRandomMeal);

// displayRandomMeal();
