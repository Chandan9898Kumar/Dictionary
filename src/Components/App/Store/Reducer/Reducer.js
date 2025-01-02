export function WordReducer(state = "", action) {
  switch (action.type) {
    case "set":
      return action.word;
    case "get":
      return state;

    default:
      return state;
  }
}

export function LoadingReducer(state = false, action) {
  switch (action.type) {
    case "isLoading":
      return action.isLoading;

    default:
      return state;
  }
}
