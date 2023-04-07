import styles from "./BarChart.module.css";
import { motion } from "framer-motion";

import { commonStatistic } from "../../../utils/statisticCalculate";
import Link from "next/link";
import SpetialText from "../../../data/SpetialText";

const BarChart = ({ month }: { month?: string }) => {
  const data = [
    {
      name: "01",
      score: commonStatistic("2022-01-01", "2022-01-31", "Fake").length * 10,
    },
    {
      name: "02",
      score: commonStatistic("2022-02-01", "2022-02-31", "Fake").length * 10,
    },
    {
      name: "03",
      score: commonStatistic("2022-03-01", "2022-03-31", "Fake").length * 10,
    },
    {
      name: "04",
      score: commonStatistic("2022-04-01", "2022-04-31", "Fake").length * 10,
    },
    {
      name: "05",
      score: commonStatistic("2022-05-01", "2022-05-31", "Fake").length * 10,
    },
    {
      name: "06",
      score: commonStatistic("2022-06-01", "2022-06-31", "Fake").length * 10,
    },
    {
      name: "07",
      score: commonStatistic("2022-07-01", "2022-07-31", "Fake").length * 10,
    },
    {
      name: "08",
      score: commonStatistic("2022-08-01", "2022-08-31", "Fake").length * 10,
    },
    {
      name: "09",
      score: commonStatistic("2022-09-01", "2022-09-31", "Fake").length * 10,
    },
    {
      name: "10",
      score: commonStatistic("2022-10-01", "2022-10-31", "Fake").length * 10,
    },
    {
      name: "11",
      score: commonStatistic("2022-11-01", "2022-11-31", "Fake").length * 10,
    },
    {
      name: "12",
      score: commonStatistic("2022-12-01", "2022-12-31", "Fake").length * 10,
    },
  ];

  return (
    <div className={styles.BarChart}>
      <div>
        <svg width="830" height="200" style={{ transform: "scaleY(-1)" }}>
          {data.map((item, i) => {
            let color = i % 2 === 0 ? "#CDCDCD" : "#e4e4e4";
            return (
              <Link key={item.name} href={`/month/${item.name}`}>
                <rect
                  className={
                    month === item.name ? styles.barActive : styles.bar
                  }
                  width="60"
                  height={item.score / 10}
                  style={{ fill: color }}
                  x={i * 70}
                />
              </Link>
            );
          })}
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "830px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.barNumbers}
        >
          <p>01</p>
          <p>02</p>
          <p>03</p>
          <p>04</p>
          <p>05</p>
          <p>06</p>
          <p>07</p>
          <p>08</p>
          <p>09</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
        </motion.div>
      </div>
      <p className={styles.subtitle}>
        <SpetialText name={"Fakes_dynamics"} />
      </p>
    </div>
  );
};

export default BarChart;
