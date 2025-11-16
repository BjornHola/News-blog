import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/mainPage/index-main-page";
import { SignInPage } from "../pages/signIn/index-signIn";
import { SignUpPage } from "../pages/signUp/index-signUp";
import { PATHS } from "./configs";
import { NotFoundPage } from "../pages/notFoundPage/index-notFoundPage";
import { GuestPage } from "../pages/guestPAge/guest-page-index";
import { SinglePostPage } from "../pages/singlePostPage/index-single-post-page";

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <MainPage />, //
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
    element: <GuestPage />, //
  },
  {
    path: PATHS.ARTICLE_PAGE,
    element: <SinglePostPage />,
  },
]);
// main page - страница со статьями, start page - гостевая страница
