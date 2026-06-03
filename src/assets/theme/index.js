const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848a',
  },
  text: {
    primaryTextColor: '#484848',
    secondaryTextColor: '#222',
  },
  mixin: {
   boxShadow: `
      transition: box-shadow 1s ease;
      &:hover{
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
   `
  },
}

export default theme