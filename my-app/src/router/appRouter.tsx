import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/mainPage/index-main-page";
import { SignInPage } from "../pages/signIn/index-signIn";
import { SignUpPage } from "../pages/signUp/index-signUp";
import { PATHS } from "./configs";
import { NotFoundPage } from "../pages/notFoundPage/index-notFoundPage";
import { GuestPage } from "../pages/guestPage/guest-page-index";
import { SinglePostPage } from "../pages/singlePostPage/index-single-post-page";
import { SearchPage } from "../pages/searchPage/search-page";

export const router = createBrowserRouter([
  {
    path: PATHS.MAIN_PAGE,
    element: <MainPage />,
  },

  {
    path: PATHS.SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: PATHS.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: PATHS.NotFound,
    element: <NotFoundPage />,
  },
  {
    path: PATHS.GUEST_PAGE,
    element: <GuestPage />,
  },
  {
    path: "/articles/:id",
    element: <SinglePostPage />,
  },
  {
    path: "/news/:id",
    element: <SinglePostPage />,
  },
  {
    path: "/myBlogs/tab/:tabLabel",
    element: <MainPage />,
  },
  { path: PATHS.SEARCH_PAGE, element: <SearchPage /> },
]);
