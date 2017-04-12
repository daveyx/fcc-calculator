export const clickButtonAction = (data) => {
  console.log("clickButtonAction called");
  return {
    type: "BUTTON_CLICKED",
    payload: data
  }
};
