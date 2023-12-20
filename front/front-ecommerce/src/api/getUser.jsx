import { endPoints } from './endPoints';

const getUser = async () => {
  try {
    const userJson = await fetch(endPoints.users.getUser(1));
    if (!userJson.ok) {
      throw new Error(`Error: ${userJson.status} - ${userJson.statusText}`);
    }
    const user = await userJson.json();
    return user;
  } catch (err) {
      console.log(err);
      throw err;
  }
};

export { getUser };
