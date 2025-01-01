export default function MakeAsyncCall(word) {
  return (dispatch) => {
    dispatch({ type: "isLoading", isLoading: true });

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        if (results?.message) dispatch({ type: "set", word: results });
        else dispatch({ type: "set", word: results[0] });
      })
      .catch((err) => {
        dispatch({
          type: "set",
          word: { message: "Something went wrong with the server.", resolution: "Please wait for dictionaryAPI.dev to respond at a later time, or you can just head over to the web." },
        });
      })
      .finally(() => {
        dispatch({ type: "isLoading", isLoading: false });
      });
  };
}

// The MakeAsyncCall function is designed to return a function that can be executed later with dispatch.
// The useEffect hook is correctly set up to call MakeAsyncCall and pass the result to dispatch, which is how Redux Thunk is intended to work.
// You don't need to call the returned function manually; Redux Thunk handles that for you when you dispatch the function.
