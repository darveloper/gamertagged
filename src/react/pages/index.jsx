import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Matches from "./Matches";
import Register from "./Register";
import Questionnaire from "./Questionnaire"
import FriendsPage from "./FriendsPage"

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile", component: Profile },
  Matches: { path: "/matches", component: Matches },
  Register: { path: "/register", component: Register },
  Questionnaire: { path: "/questionnaire", component: Questionnaire },
  NotFound: { path: "*", component: NotFound }
};
