import styles from "@/styles/Home.module.css";
import StatisticDisplay from "@/components/StatisticDisplay/StatisticDisplay";
import BarChart from "@/components/BarChart/BarChart";
import { commonStatistic } from "../../utils/statisticCalculate";
import Link from "next/link";
import { motion } from "framer-motion";

const archive = () => {
  return (
    <>
      <motion.div
        className={styles.barChartArhive}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        <BarChart />
      </motion.div>

      <motion.div
        className={styles.archivePage}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "tween", delay: 0.2 }}
      >
        <Link href={"/month/01"}>
          <StatisticDisplay
            mode="disactive"
            month="January"
            narratives={
              commonStatistic("2022-01-01", "2022-01-31", "Narrative").length
            }
            fakes={commonStatistic("2022-01-01", "2022-01-31", "Fake").length}
            sources={
              commonStatistic("2022-01-01", "2022-01-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/02"}>
          <StatisticDisplay
            mode="disactive"
            month="February"
            narratives={
              commonStatistic("2022-02-01", "2022-02-31", "Narrative").length
            }
            fakes={commonStatistic("2022-02-01", "2022-02-31", "Fake").length}
            sources={
              commonStatistic("2022-02-01", "2022-02-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/03"}>
          <StatisticDisplay
            mode="disactive"
            month="March"
            narratives={
              commonStatistic("2022-03-01", "2022-03-31", "Narrative").length
            }
            fakes={commonStatistic("2022-03-01", "2022-03-31", "Fake").length}
            sources={
              commonStatistic("2022-03-01", "2022-03-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/04"}>
          <StatisticDisplay
            mode="disactive"
            month="April"
            narratives={
              commonStatistic("2022-04-01", "2022-04-31", "Narrative").length
            }
            fakes={commonStatistic("2022-04-01", "2022-04-31", "Fake").length}
            sources={
              commonStatistic("2022-04-01", "2022-04-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/05"}>
          <StatisticDisplay
            mode="disactive"
            month="May"
            narratives={
              commonStatistic("2022-05-01", "2022-05-31", "Narrative").length
            }
            fakes={commonStatistic("2022-05-01", "2022-05-31", "Fake").length}
            sources={
              commonStatistic("2022-05-01", "2022-05-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/06"}>
          <StatisticDisplay
            mode="disactive"
            month="June"
            narratives={
              commonStatistic("2022-06-01", "2022-06-31", "Narrative").length
            }
            fakes={commonStatistic("2022-06-01", "2022-06-31", "Fake").length}
            sources={
              commonStatistic("2022-06-01", "2022-06-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/07"}>
          <StatisticDisplay
            mode="disactive"
            month="July"
            narratives={
              commonStatistic("2022-07-01", "2022-07-31", "Narrative").length
            }
            fakes={commonStatistic("2022-07-01", "2022-07-31", "Fake").length}
            sources={
              commonStatistic("2022-07-01", "2022-07-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/08"}>
          <StatisticDisplay
            mode="disactive"
            month="August"
            narratives={
              commonStatistic("2022-08-01", "2022-08-31", "Narrative").length
            }
            fakes={commonStatistic("2022-08-01", "2022-08-31", "Fake").length}
            sources={
              commonStatistic("2022-08-01", "2022-08-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/09"}>
          <StatisticDisplay
            mode="disactive"
            month="September"
            narratives={
              commonStatistic("2022-09-01", "2022-09-31", "Narrative").length
            }
            fakes={commonStatistic("2022-09-01", "2022-09-31", "Fake").length}
            sources={
              commonStatistic("2022-09-01", "2022-09-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/10"}>
          <StatisticDisplay
            mode="disactive"
            month="October"
            narratives={
              commonStatistic("2022-10-01", "2022-10-31", "Narrative").length
            }
            fakes={commonStatistic("2022-10-01", "2022-10-31", "Fake").length}
            sources={
              commonStatistic("2022-10-01", "2022-10-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/11"}>
          <StatisticDisplay
            mode="disactive"
            month="November"
            narratives={
              commonStatistic("2022-11-01", "2022-11-31", "Narrative").length
            }
            fakes={commonStatistic("2022-11-01", "2022-11-31", "Fake").length}
            sources={
              commonStatistic("2022-11-01", "2022-11-31", "Media").length
            }
          />
        </Link>
        <Link href={"/month/12"}>
          <StatisticDisplay
            mode="disactive"
            month="December"
            narratives={
              commonStatistic("2022-12-01", "2022-12-31", "Narrative").length
            }
            fakes={commonStatistic("2022-12-01", "2022-12-31", "Fake").length}
            sources={
              commonStatistic("2022-12-01", "2022-12-31", "Media").length
            }
          />
        </Link>
      </motion.div>
    </>
  );
};

export default archive;
