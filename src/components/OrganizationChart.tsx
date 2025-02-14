import { useRef, useEffect } from "react";

import RelationGraph, {
  RGOptions,
  RelationGraphComponent,
} from "relation-graph-react";

interface Node {
  id: string;
  text: string;
}

interface Line {
  from: string;
  to: string;
}

interface Department {
  id: number;
  name: string;
}

interface Position {
  id: number;
  name: string;
  responsible_position: string | null;
  responsible_persons: string[];
  department: Department;
}

const OrganizationChart = () => {
  const positions = [
    {
      id: 22,
      responsible_position: null,
      responsible_persons: ["", ""],
      name: "CEO",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 23,
      responsible_position: "CEO",
      responsible_persons: ["Yusuf Karancı"],
      name: "CFO",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 24,
      responsible_position: "CFO",
      responsible_persons: ["Mehmet Raşit Özdoğlar"],
      name: "Adminitstrative Staff",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 25,
      responsible_position: "CFO",
      responsible_persons: ["Mehmet Raşit Özdoğlar"],
      name: "COO",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 26,
      responsible_position: "CEO",
      responsible_persons: ["Yusuf Karancı"],
      name: "CTO",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 27,
      responsible_position: "CTO",
      responsible_persons: [],
      name: "Senior Fullstack Developer",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 28,
      responsible_position: "CTO",
      responsible_persons: [],
      name: "Frontend Developer",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 29,
      responsible_position: "CTO",
      responsible_persons: [],
      name: "Stajyer",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 30,
      responsible_position: "CEO",
      responsible_persons: ["Yusuf Karancı"],
      name: "CPO",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 31,
      responsible_position: "CPO",
      responsible_persons: [],
      name: "Head of Product",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 32,
      responsible_position: "CPO",
      responsible_persons: [],
      name: "Product Manager",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 33,
      responsible_position: "CEO",
      responsible_persons: ["Yusuf Karancı"],
      name: "CMO",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 34,
      responsible_position: "CMO",
      responsible_persons: [],
      name: "Business Development",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 35,
      responsible_position: "CEO",
      responsible_persons: ["Yusuf Karancı"],
      name: "Head of Marketing",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 36,
      responsible_position: "CMO",
      responsible_persons: [],
      name: "Marketing & HR",
      department: {
        id: 1,
        name: "Development",
      },
    },
    {
      id: 37,
      responsible_position: "CMO",
      responsible_persons: [],
      name: "Marketing",
      department: {
        id: 1,
        name: "Development",
      },
    },
  ];

  const showVTree = async () => {
    const __graph_json_data = buildGraph(positions);
    const graphInstance = graphRef.current?.getInstance();
    if (graphInstance) {
      await graphInstance.setOptions(graphOptionsV);
      await graphInstance.setJsonData(__graph_json_data);
      await graphInstance.moveToCenter();
      await graphInstance.zoomToFit();
    }
  };
  useEffect(() => {
    if (positions.length > 0) {
      showVTree();
    }
  }, [positions]);

  const buildGraph = (
    data: Position[]
  ): { rootId: string; nodes: Node[]; lines: Line[] } => {
    const nodes: Node[] = [];
    const lines: Line[] = [];
    const idMap = new Map<string, string>();

    data.forEach((item) => {
      const nodeId = item.name.replace(/\s+/g, "_");
      idMap.set(item.name, nodeId);
      nodes.push({ id: nodeId, text: item.name });

      if (item.responsible_position) {
        const parentId = idMap.get(item.responsible_position);
        if (parentId) {
          lines.push({ from: parentId, to: nodeId });
        }
      }
    });

    return { rootId: "CEO", nodes, lines };
  };

  const graphRef = useRef<RelationGraphComponent | null>(null);
  const graphOptionsV: RGOptions = {
    layout: {
      label: "Finnovation",
      layoutName: "tree",
      layoutClassName: "seeks-layout-center",
      from: "left",
      max_per_width: parseFloat("300"),
      min_per_height: parseFloat("40"),
    },
    defaultLineMarker: {
      markerWidth: 12,
      markerHeight: 12,
      refX: 6,
      refY: 6,
      data: "M2,2 L10,6 L2,10 L6,6 L2,2",
    },
    defaultNodeShape: 1,
    defaultNodeWidth: 100,
    backgroundColor: "rgb(248,248,248)",
    defaultLineShape: 2,
    defaultJunctionPoint: "lr",
    defaultNodeBorderWidth: 0,
    defaultLineColor: "rgba(0, 186, 189, 1)",
    defaultNodeColor: "rgba(0, 206, 209, 1)",
  };

  return (
    <div>
      <div style={{ height: "70vh", width: "70vw" }}>
        <RelationGraph ref={graphRef} options={graphOptionsV} />
      </div>
    </div>
  );
};

export default OrganizationChart;
