const redux = require('redux');

const initialState = {
  count: 0,
  current: '2024-04-27',
};

// function reducer(state = initialState, action) {
//   // action is object = {type: 'string', payload: anyType}
//   console.log('Reducer is working', state, action);
//   if (action.type === 'add') {
//     return {
//       ...state,
//       count: state.count + 1,
//     };
//   }
//   if (action.type === 'addPayload') {
//     return {
//       ...state,
//       count: state.count + action.payload,
//     };
//   }
//   if (action.type === 'add100') {
//     return {
//       ...state,
//       count: state.count + 100,
//     };
//   }
//   return state;
// }

function reducer(state = initialState, { type, payload }) {
  console.log('Reducer is working', state, type, payload);
  switch (type) {
    case 'add':
      return { ...state, count: state.count + 1 };
    case 'addPayload':
      return { ...state, count: state.count + payload };
    case 'addHundred':
      return { ...state, count: state.count + 100 };
    default:
      return state;
  }
}

const store = redux.createStore(reducer, initialState);

function addHundred(value) {
  return {
    type: 'addHundred',
    payload: value,
  };
}

function addPayload(value) {
  return {
    type: 'addPayload',
    payload: value,
  };
}

// console.log(store);
console.log(store.getState());

store.dispatch({ type: 'add' });
console.log(store.getState());

store.dispatch(addHundred(500));
console.log(store.getState());

store.dispatch(addPayload(500));
console.log(store.getState());
