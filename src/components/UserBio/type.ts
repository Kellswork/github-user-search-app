export interface GitHubUserProp {
  avatar_url: string;
  bio: string | null; // bio can be a string or null
  blog: string;
  company: string | null; // company can be a string or null
  created_at: string; // ISO date string
  email: string | null; // email can be a string or null
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean | null; // hireable can be a boolean or null
  html_url: string;
  id: number;
  location: string | null; // location can be a string or null
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null; // twitter_username can be a string or null
  type: "User"; // This is a constant string type
  updated_at: string; // ISO date string
  url: string;
}