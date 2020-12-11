import { REQUEST, SUCCESS, FAILURE } from '../constants';

const createPostParams = (data) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

const api = (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, postData, ...rest } = action;

  next({ ...rest, type: type + REQUEST });
  try {
    const params = postData ? createPostParams(postData) : {};

    const response = await fetch(CallAPI, params).then(async (res) => {
      const data = await res.json();
      if (res.ok) return data;
      throw data;
    });
    return next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, error });
  }
};

export default api;
