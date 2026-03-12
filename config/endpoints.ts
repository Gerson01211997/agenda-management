export const endpoints = {
  searchDoctors: (query: string) => `/search/${encodeURIComponent(query)}`,
};