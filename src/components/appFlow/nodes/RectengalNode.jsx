import styled from "@emotion/styled";
import React from "react";
import { Handle, Position } from "reactflow";
const RectengleNodeStyled = styled.article`
  min-height: 20px;
  min-width: 20px;
  max-width: 400px;
  overflow: hidden;
`;
function RectengleNode({ data }) {
  return (
    <RectengleNodeStyled
      className={
        "  bg-blue-light text-gray-100 font-light capitalize rounded-md shadow-xl shadow-blue-xdark/20 text-xs  flex overflow-hidden  relative" +
        data?.className
      }
    >
      <div
        className={
          " w-[40px] h-full absolute top-0 left-0   mr-1 flex-shrink-0 flex items-center justify-center rounded-l-md " +
            data?.classNameIcon || "bg-red-400"
        }
      >
        {data?.icon}
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="rectengle-target"
        className="border-2 border-gray-100 p-[2px] bg-blue-medium"
      />

      {data.oneHandle ? (
        <>
          <Handle
            type="source"
            className="absolute top-full left-[60%] border-2 border-gray-100 p-[2px] bg-blue-medium"
            id="rectengle-target-1"
            position={Position.Bottom}
          />
        </>
      ) : (
        <>
          <Handle
            type="source"
            className="absolute top-full left-[60%] border-2 border-gray-100 p-[2px] bg-blue-medium"
            id="rectengle-target-1"
            position={Position.Bottom}
          />
          <span className="absolute top-[105%] left-[63%] text-red-500">
            No
          </span>
          <Handle
            type="source"
            className="absolute top-full left-[40%] border-2 border-gray-100 p-[2px] bg-blue-medium"
            id="rectengle-target-2"
            position={Position.Bottom}
          />

          <span className="absolute top-[105%] left-[32%] text-green-500">
            Yes
          </span>
        </>
      )}
      <Handle
        type="source"
        className="absolute top-full left-[90%] bg-red-500 border-none p-[4px]"
        id="rectengle-target-2"
        position={Position.Bottom}
      />
      <div className=" p-4 py-2 ml-[40px] text-xs tracking-tighter font-mono">
        {data?.text || "RectengleNode"}
      </div>
    </RectengleNodeStyled>
  );
}

export default RectengleNode;
