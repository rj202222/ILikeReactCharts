import * as React from "react";
import ReactApexcharts from "react-apexcharts";
import { num } from "../utils/generators";
import Layout from "./Layout";
import { AiOutlineBarChart, AiOutlineAreaChart } from "react-icons/ai";

const data = {
  james: new Array(10).fill(0).map((_el) => num()),
  gabrielle: new Array(10).fill(0).map((_el) => num()),
  alice: new Array(10).fill(0).map((_el) => num()),
};

export default function Students() {
  const [view, setView] = React.useState<"area" | "bar">("bar");

  const series = [
    {
      name: "James",
      data: data.james,
    },
    {
      name: "Gabrielle",
      data: data.gabrielle,
    },
    {
      name: "Alice",
      data: data.alice,
    },
  ];

  const options = {
    xaxis: {
      categories: [
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
      ],
    },
  };

  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <a
          onClick={() => setView("bar")}
          style={{
            fontSize: "3em",
            color: view === "bar" ? "#0f6375" : "black",
          }}
        >
          <AiOutlineBarChart />
        </a>

        <a
          onClick={() => setView("area")}
          style={{
            fontSize: "3em",
            color: view === "area" ? "#0f6375" : "black",
          }}
        >
          <AiOutlineAreaChart />
        </a>
      </div>

      {view === "bar" && (
        <ReactApexcharts
          type="bar"
          height={500}
          series={series}
          options={options}
        />
      )}

      {view === "area" && (
        <ReactApexcharts
          type="area"
          height={500}
          series={series}
          options={options}
        />
      )}
    </Layout>
  );
}
