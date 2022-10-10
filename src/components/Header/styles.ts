import { styled } from "../../styles";

export const Header = styled("header", {
  display: "flex",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  alignItems: "center",
});

export const Text = styled("h1", {
  color: "$white",
  fontSize: "$xl",
  fontWeight: "$2",
  marginLeft: "1rem",

  span: {
    color: "$gray3",
    fontSize: "$sm",
    display: "block",
    textTransform: "uppercase",
  },
});
