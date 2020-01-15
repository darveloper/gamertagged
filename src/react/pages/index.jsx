import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Matches from "./Matches";
import Register from "./Register";
import Questionnaire from "./Questionnaire"
import Friends from "./Friends"
import Login from "./Login"

export default {
  Home: { path: "/", component: Home },
  Login: { path: "/login", component: Login },
  Register: { path: "/register", component: Register },
  Profile: { path: "/profile/:username", component: Profile },
  Matches: { path: "/matches/:username", component: Matches },
  Questionnaire: { path: "/questionnaire/:username", component: Questionnaire },
  Friends: { path: "/friends/:username", component: Friends },
  NotFound: { path: "*", component: NotFound }
};
