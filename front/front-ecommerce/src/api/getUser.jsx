import { endPoints } from './endPoints';

const getUser = async () => {
  try {
    const userJson = await fetch(endPoints.users.getUser(1));
    const user = await userJson.json();
    return user;
  } catch (err) {
    console.log(err);
  }
};

export { getUser };
