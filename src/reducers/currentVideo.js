var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.currentVideo || null;
    default:
      return state;
  }
};

export default currentVideoReducer;
