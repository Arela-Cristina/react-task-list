function getButtonColor(state) {
  return state === "completed" 
    ? "green"
    : state === "in_progress"
    ? "orange"
    : "red";
}

export default functions;
