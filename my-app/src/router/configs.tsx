export const PATHS = {
  HOME: "/start", //
  SIGN_IN: "/auth",
  SIGN_UP: "/register",
  MAIN_PAGE: "/myBlogs/articles",
  GUEST_PAGE: "/", //
  ARTICLE_PAGE: "/articles/:id",
  NotFound: "*",
} as const;

export type PATHS = (typeof PATHS)[keyof typeof PATHS];
