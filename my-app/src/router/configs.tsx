export const PATHS = {
  HOME: "/start", //
  SIGN_IN: "/auth",
  SIGN_UP: "/register",
  MAIN_PAGE: "/myBlogs",
  GUEST_PAGE: "/", //
  NotFound: "*",
  ACTIVE_TAB: "/myBlogs/tab/:tablabel",
  SEARCH_PAGE: "/search/:tabLabel/:searchValue",
} as const;

export type PATHS = (typeof PATHS)[keyof typeof PATHS];
