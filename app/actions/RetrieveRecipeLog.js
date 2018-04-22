export default function retrieveRecipeLog(userid=100){
    // Thunk will place the dispatch variable here for us
    return (dispatch) =>{
            dispatch(notifyRetrieving());
        //fetch(`https://jsonplaceholder.typicode.com/users`).
        new Promise(resolve => {resolve()}).
        // then(response => response.json(), error => console.log("wassup", error)).then( json => {
        then( ()=>{
                dispatch(notifyDoneRetrieving([
                            {breakfast: {name: "Pancakes", cookTime: 15, key:104, imageURI:"https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-articleLarge.jpg"},
                             dinner: {},
                             dessert:{},
                        },
                        {
                            breakfast: {name: "Falafel", cookTime: 15, key:540, imageURI:"https://mykitchenkohl.files.wordpress.com/2011/07/100_8674.jpg?w=768"},
                            dinner: {name: "Scrambled Eggs", cookTime: 15, key: 132, imageURI:"https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg" },
                            dessert: {name: "Scrambled Eggs", cookTime: 15, key: 132, imageURI:"https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg" }
                        },
                ]))
            });
        };

    }

function notifyRetrieving(){
return {
    type: "RETRIEVING_RECIPE_LOG",
}
}

function notifyDoneRetrieving(json=[]){
return {
    type: "DONE_RETRIEVING_RECIPE_LOG",
    recipes: json
}
}
