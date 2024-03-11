import {
  faBox,
  faClockRotateLeft,
  faEnvelope,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import AccountOverview from "../pages/profile-page/components/AccountOverview";
import Orders from "../pages/profile-page/components/Orders";
const profileSideBarArray = [
  {
    id: 1,
    text: "Account Overview",
    icon: faUser,
    path: "account",
    element: <AccountOverview />,
  },
  {
    id: 2,
    text: "Orders",
    icon: faBox,
    path: "orders",
    element: <Orders />,
  },
  {
    id: 3,
    text: "Inbox",
    icon: faEnvelope,
    path: "inbox",
    element: <h1>Inbox</h1>,
  },
  {
    id: 4,
    text: "Pending Reviews",
    icon: faMessage,
    path: "reviews",
    element: <h1>Reviews</h1>,
  },
  {
    id: 5,
    text: "Recently Viewed",
    icon: faClockRotateLeft,
    path: "recent",
    element: <h1>Recent</h1>,
  },
];

export default profileSideBarArray;
