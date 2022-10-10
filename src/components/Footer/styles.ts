import { styled } from "../../styles";

export const FooterContainer = styled("footer", {
  display: "flex",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "auto",
  fontSize: "$sm",
  
  a: {
    color: "$white",
    textDecoration: "none",
  }
});