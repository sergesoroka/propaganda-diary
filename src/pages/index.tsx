import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import StatisticDisplay from "@/components/StatisticDisplay/StatisticDisplay";
import BarChart from "@/components/BarChart/BarChart";
import LatestNarratives from "@/components/LatestNarratives/LatestNarratives";

import { uniqueNarrativesEn } from "../../utils/statisticCalculate";
import { uniqueFakesEn } from "../../utils/statisticCalculate";
import { uniqueSourcesEn } from "../../utils/statisticCalculate";

export default function Home() {
  return (
    <>
      <Head>
        <title>Propaganda Diary</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BarChart />
        <StatisticDisplay
          mode="active"
          month="General Statistic"
          narratives={uniqueNarrativesEn.length}
          fakes={uniqueFakesEn.length}
          sources={uniqueSourcesEn.length}
        />

        <LatestNarratives />
      </main>
    </>
  );
}
