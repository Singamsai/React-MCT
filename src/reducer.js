const count = "all";

export default function reducer(state = count, action) {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "male":
      return "male";
    case "female":
      return "female";
    case "all":
      return "all";
    default:
      return "all";
  }
}
