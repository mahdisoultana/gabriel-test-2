import styled from "@emotion/styled";
import React from "react";
import { Handle, Position } from "reactflow";
const StartStyled = styled.article`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Start({ data }) {
  return (
    <StartStyled
      className={
        data?.className ||
        "border-green-500 text-green-500 font-light capitalize"
      }
    >
      {data.text == "finished" ? (
        <Handle type="target" position={Position.Top} id="b" />
      ) : (
        <Handle type="source" position={Position.Bottom} id="a" />
      )}
      {data?.text || "start"}
    </StartStyled>
  );
}

export default Start;
