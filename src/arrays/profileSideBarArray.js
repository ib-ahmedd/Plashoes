import {
  faBox,
  faClockRotateLeft,
  faEnvelope,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import AccountOverview from "../pages/profile-page/sub-pages/account-overview/AccountOverview";
import Orders from "../pages/profile-page/sub-pages/orders/Orders";
import PendingReviews from "../pages/profile-page/sub-pages/pending-reviews/PendingReviews";
import RecentlyViewed from "../pages/profile-page/sub-pages/recently-viewed/RecentlyViewed";
import Inbox from "../pages/profile-page/sub-pages/inbox/Inbox";
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
    element: <Inbox />,
  },
  {
    id: 4,
    text: "Pending Reviews",
    icon: faMessage,
    path: "reviews",
    element: <PendingReviews />,
  },
  {
    id: 5,
    text: "Recently Viewed",
    icon: faClockRotateLeft,
    path: "recent",
    element: <RecentlyViewed />,
  },
];

export default profileSideBarArray;
