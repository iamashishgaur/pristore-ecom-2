import { BiHomeCircle, BiPieChartAlt, BiFileFind } from "react-icons/bi";
import {
  AiOutlineTeam,
  AiOutlineUserAdd,
  AiOutlineCalendar,
  AiOutlinePieChart,
} from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { FcViewDetails } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { GrStatusInfo } from "react-icons/gr";

export const Icons = () => {
  <>
    <BiHomeCircle />
    <BiPieChartAlt />
  </>;
};

export const Sidenavbardata = [
  {
    id: 1,
    navname: "DashBoard",
    icon: <BiHomeCircle />,
    path: "/admin-dashboard",
  },
  {
    id: 1,
    navname: "Create Product",
    icon: <BsFillClipboard2PlusFill />,
    path: "/product-create",
  },
  {
    id: 2,
    navname: "User Info",
    icon: <CgProfile />,
    path: "/customer-list",
  },
  {
    id: 3,
    navname: "Order Invoice",
    icon: <TbFileInvoice />,
    path: "/order-invoice",
  },
  {
    id: 4,
    navname: "Profile Create",
    icon: <AiOutlineUserAdd />,
    path: "/profile-create",
  },
  {
    id: 5,
    navname: "Order Calender",
    icon: <AiOutlineCalendar />,
    path: "/order-calender",
  },
  {
    id: 6,
    navname: "Order Chart",
    icon: <AiOutlinePieChart />,
    path: "/orderchart",
  },
  {
    id: 7,
    navname: "Order Details",
    icon: <FcViewDetails />,
    path: "/order-details",
  },
  {
    id: 8,
    navname: "Order Status",
    icon: <GrStatusInfo />,
    path: "/order-status",
  },
];
