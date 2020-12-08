import { createContext } from 'react';

const userContext = createContext({ name: 'default name' });

export const UserConsumer = userContext.Consumer;
export const UserProvider = userContext.Provider;

export default userContext;
