import axios from 'axios';

const BASE_URL = 'https://api.github.com';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchApiData = async (page: number) => {
  const route = `${BASE_URL}/search/repositories?q=stars:>0&per_page=10&page=${page}`;
  return await axios.get(route);
};

export const fetchTopContributors = async (owner: string, repo: string) => {
  const route = `${BASE_URL}/repos/${owner}/${repo}/contributors?q=contributions&order=desc`;
  return await axios.get(route);
};