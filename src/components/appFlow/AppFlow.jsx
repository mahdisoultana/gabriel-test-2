import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes } from "./data";
import nodesTypes from "./nodes/Nodes";

function AppFlow() {
  const [nodes, setNodes] = useState(initialNodes);

  const [edges, setEdges] = useState([]);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection) =>
      setEdges((eds) => {
        return addEdge(
          {
            ...connection,
            type: "smoothstep",

            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: "#ffffff",
              width: 18,
              height: 18,
            },
          },
          eds,
        );
      }),
    [setEdges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodesTypes}
      minZoom={-Infinity}
      maxZoom={Infinity}
      fitView
      className="w-full h-full"
    />
  );
}

export default AppFlow;
