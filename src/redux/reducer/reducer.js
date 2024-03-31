let initialState = {
  count: 0,
}

function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state, count: state.count + action.payload.num
    }//...state 는 모든 state값은 놔둔채! count.state 값만 변경한다!!
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - action.payload.num
    }
  }
  if (action.type === "MULTI") {
    return { ...state, count: state.count * action.payload.num
    }
  }
  return { ...state };
}



export default reducer;