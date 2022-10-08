// import { BiGitRepoForked, BiTimeFive, BiCodeAlt } from 'react-icons/bi'
import { BiCodeAlt, BiGitRepoForked, BiTimeFive } from "react-icons/bi";
import { SiGraylog } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
// import { FaGooglePay } from 'react-icons/fa'
export const initialNodes = [
  {
    id: "node-1",
    type: "node-circle",
    position: { x: 0, y: 0 },
    data: { text: "start" },
  },
  //
  {
    id: "node-r-2",
    type: "node-rectengle",
    position: { x: 0, y: 200 },
    data: {
      text: (
        <p>
          <span className="mb-1 text-blue-600 block">/**Comment**/</span>
          <span className="block">stlyed.div=`width:100px important; //` </span>
          <span className="block"> height:100px </span>
          <span className="block">stlyed.div=`height:100px;` </span>
        </p>
      ),
      icon: <BiCodeAlt className="text-3xl" />,
      classNameIcon: "bg-blue-600",
    },
  },

  {
    id: "node-r-3",
    type: "node-rectengle",
    position: { x: 200, y: 200 },
    data: {
      text: (
        <p>
          <span className="mb-1 text-yellow-600 block">/**Comment**/</span>
          <span className="block">if ( isBilling ) then do this </span>
          <span className="block">if ( isBilling ) then do this </span>
        </p>
      ),
      icon: <BiGitRepoForked className="text-3xl" />,
      classNameIcon: "bg-orange-400",
    },
  },
  {
    id: "node-r-4",
    type: "node-rectengle",
    position: { x: -200, y: 300 },
    data: {
      oneHandle: true,
      text: <p className="text-blue-xlight">Execute Js</p>,
      icon: <TbBrandJavascript className="text-2xl" />,
      classNameIcon: "bg-yellow-500",
    },
  },

  {
    id: "node-r-5",
    type: "node-rectengle",
    position: { x: 300, y: 400 },
    data: {
      text: (
        <p>
          <span className="mb-1 text-orange-500 block">/**Comment**/</span>
          <span className=" block text-blue-xlight">Delay</span>
        </p>
      ),
      oneHandle: true,
      icon: <BiTimeFive className="text-2xl" />,
      classNameIcon: "bg-teal-500",
    },
  },
  {
    id: "node-r-6",
    type: "node-rectengle",
    position: { x: -400, y: 300 },
    data: {
      oneHandle: true,
      text: <p className="text-blue-xlight">Execute Js</p>,
      icon: <TbBrandJavascript className="text-2xl" />,
      classNameIcon: "bg-yellow-500",
    },
  },
  {
    id: "node-r-7",
    type: "node-rectengle",
    position: { x: -400, y: 300 },
    data: {
      oneHandle: true,
      text: <p className="text-blue-xlight">Log</p>,
      icon: <SiGraylog className="text-2xl" />,
      classNameIcon: "bg-green-800",
    },
  },
  {
    id: "node-r-8",
    type: "node-rectengle",
    position: { x: -400, y: 500 },
    data: {
      oneHandle: true,
      text: <p className="text-blue-xlight">Log</p>,
      icon: <SiGraylog className="text-2xl" />,
      classNameIcon: "bg-green-800",
    },
  },
  //
  {
    id: "node-2",
    type: "node-circle",
    position: { x: 0, y: 500 },
    data: { text: "finished" },
  },
];
