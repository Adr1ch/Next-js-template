export const baseUrl = "http://localhost:1337";
export const usersPath = "/api/users?populate=deep,10";
export const registerPath = "/api/auth/local/register";
export const pagesPath = "/api/pages?populate=deep,10";
export const filterBySlug = (slug: string) => `filters[slug][$eq]=${slug}`;
export const authPath = "/api/auth/local";
