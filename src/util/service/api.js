import axios from 'axios';

const API = "https://cooking-forum-server.onrender.com"; 
const getDishes = () => axios.get(`${API}/dishes/all`);
const addDish = (dishData) => axios.post(`${API}/dishes/add`,{dishData}, { withCredentials: true });
const getRecipesForDish = (id) => axios.get(`${API}/dishes/${id}/recipes`);
const addRecipeToDish = (dishName, recipeData) => axios.post(`${API}/dishes/${dishName}/recipes/add`,{ recipeData}, { withCredentials: true });
const addPost=(Post)=>axios.post(`${API}/post/add`,{Post}, { withCredentials: true });
const getPost=(user)=>axios.get(`${API}/post/user/${user}`);
const getPostAll=()=>axios.get(`${API}/post/all`);

export {
    getDishes,
    addDish,
    getRecipesForDish,
    addRecipeToDish,
    addPost,
    getPost,
    getPostAll
};