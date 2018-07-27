import {combineReducers} from "redux";
import tab_reducer from "./TabReducer";
import home_reducer from "./HomeReducer";
import profile_reducer from "./ProfileReducer";
import stuff_reducer from "./StuffReducer";
import recipe_list_reducer from "./RecipeListReducer.js";
import friend_list_reducer from "./FriendListReducer.js";
import search_reducer from "./SearchReducer";
import top_recipe_reducer from "./TopRecipeReducer";
import new_recipe_reducer from "./NewRecipeReducer";
import timeline_reducer from "./TimelineReducer";
import recipe_log_reducer from "./RecipeLogReducer";
import recommender_reducer from "./RecommendReducer";
import rating_reducer from "./RatingReducer";
import login_reducer from "./LoginReducer";
import recipe_reducer from "./RecipeReducer";
export default combineReducers({login_reducer, tab_reducer, home_reducer, profile_reducer, stuff_reducer, recipe_list_reducer, friend_list_reducer, search_reducer, top_recipe_reducer, recommender_reducer, new_recipe_reducer, recipe_reducer, timeline_reducer, recipe_log_reducer, rating_reducer});