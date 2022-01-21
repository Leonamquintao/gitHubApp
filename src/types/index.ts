export type Item = {
  id: number;
  name: string;
  full_name: string;
  description?: string;
  owner?: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  updated_at: string;
  html_url: string;
};

export type ContribItem = {
  id: number;
  login: string;
  avatar_url: string;
  contributions: number
};