import getAllUsers from './user/getAllUsers';
import saveUser from './user/saveUser';

export default class Backend {
  static readonly users = {
    save: saveUser,
    get: getAllUsers,
  };
}
