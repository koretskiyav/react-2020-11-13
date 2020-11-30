const reducer = (activeRestaurant = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SETACTIVERESTAURANT':
      activeRestaurant = payload;
      return activeRestaurant;
    default:
      return activeRestaurant;
  }
};

export default reducer;
