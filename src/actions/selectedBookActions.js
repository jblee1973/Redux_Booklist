export const selectBook = selectedBook => {
  // Return an action
  return {
    type: "SELECT_BOOK",
    payload: { selectedBook }
  };
};
