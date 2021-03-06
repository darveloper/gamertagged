import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Matches from "./Matches";
import Register from "./Register";
import Questionnaire from "./Questionnaire";
import Messages from "./Messages";
import FriendsPage from "./FriendsPage";
import Onboarding from "./Onboarding";
import Inbox from "./Inbox"

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile", component: Profile },
  Matches: { path: "/matches", component: Matches },
  Register: { path: "/register", component: Register },
  Inbox: { path: "/inbox", component: Inbox },
  Messages: { path: "/messages", component: Messages },
  FriendsPage: { path: "/friendspage", component: FriendsPage },
  Onboarding: { path: "/onboarding", component: Onboarding },
  Questionnaire: { path: "/questionnaire", component: Questionnaire },
  NotFound: { path: "*", component: NotFound }
};
