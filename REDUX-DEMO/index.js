const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const InitialStateBooks = {
    numberofbooks:10
}
const InitialStatePens = {
    numberofpens:20
}
function buyBook(){
    return {
        type:"buy_book",
        payload:"first redux code"
    }
}

function buyPen(){
    return {
        type:"buy_pen",
        payload:"second redux code"
    }
}

const booksReducer  = (state = InitialStateBooks, action) =>{
    switch(action.type){
        case "buy_book":return {
            ...state ,
            numberofbooks : state.numberofbooks-1
        }
        default: return state;
    }
}


const pensReducer  = (state = InitialStatePens, action) =>{
    switch(action.type){
        case "buy_pen":return {
            ...state ,
            numberofpens : state.numberofpens-3
        }
        default: return state;
    }
}
const reducer = combineReducers({
    book: booksReducer,
    pen: pensReducer
})

const logger = store =>{
    return next =>{
        return action =>{
            const result = next(action);
            console.log("middleware log" , result);
            return result;
        }
    }
}


const store = createStore(reducer, applyMiddleware(logger));
console.log("inital State value " , store.getState());

const unsubscribe = store.subscribe(()=>{console.log("updated state value" , store.getState())});

store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());

store.dispatch(buyPen());

store.dispatch(buyPen());

store.dispatch(buyPen());


unsubscribe();


