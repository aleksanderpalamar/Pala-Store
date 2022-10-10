import { Calculator } from "phosphor-react";
import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
})
export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #7465d4 0%, #8257e6 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray3',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green',
    fontWeight: '$2',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    color: '$gray3',
    lineHeight: 1.6,    
  },

  div: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {    
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: 8,
      background: '$purple',
      color: '$white',
      fontSize: '$md',
      fontWeight: '$2',
      cursor: 'pointer',
      transition: 'filter 0.4s',
  
      '&:not(:disabled):hover': {
        filter: 'brightness(0.8)',
      },
  
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },

    a: {      
      textDecoration: 'none',
      color: '$white',
      background: 'transparent',
      outline: '2px solid $purple',
      padding: '0.8rem 1rem',
      border: 'none',
      borderRadius: 8,
      transition: '0.4s',  
      
      '&:hover': {
        opacity: 0.6,
      }
    }
  },  
})