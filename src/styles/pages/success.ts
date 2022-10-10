import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 656,
  margin: '0 auto',
  background: '$gray2',
  padding: '2rem',
  borderRadius: 8,

  h1: {
    fontSize: '$2xl',
    fontWeight: '$2',
    color: '$gray3'
  },
  
  p: {
    fontSize: '$lg',
    color: '$gray3',
    marginTop: '2rem',    
    textAlign: 'center',
    lineHeight: '1.5',
    maxWidth: 560,

    strong: {
      color: '$white'
    }
  },

  a: {
    textDecoration: 'none',
    color: '$purple',
    marginTop: '5rem',
    transition: '0.4s',
    lineHeight: '1.4',    

    '&:hover': {
      opacity: 0.6
    },
  }
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #7465d4 0%, #8257e6 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4rem',
  marginBottom: '1rem',

  img: {
    objectFit: 'cover',
  },
});