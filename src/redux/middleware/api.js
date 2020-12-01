const api = (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, ...rest } = action;

  const response = await fetch(CallAPI).then((res) => res.json());

  next({ ...rest, response });
};

export default api;
