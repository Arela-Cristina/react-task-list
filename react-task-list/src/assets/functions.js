export function getButtonColor(state) {
  return state === "completed" 
    ? "orange"
    : state === "in_progress"
    ? "pink"
    : "red";
}

// export default functions;
