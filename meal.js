function displayRandomMeal() {

    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response)


        var recipeName = response.meals[0].strMeal
        var recipeIngredients =

            $("#meal").text(recipeName);

        console.log(recipeName)

    });
}

displayRandomMeal();
