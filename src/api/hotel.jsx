import axios from 'axios';

const api = axios.create({
  baseURL: 'postgres://db_user:h0n0VLi5id9tvEqwYBVacsfyDnUkE4P4@dpg-chv5oo0rddl9p8irasn0-a.ohio-postgres.render.com/dbhotels',
});

export default api;
