import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./LatestNarratives.module.css";

import narrLast from "../../../data/lastedNarrativesSample.json";
import { useRouter } from "next/router";

const FivePopNarratives = () => {
  const router = useRouter();
  const { locale } = router;

  // @ts-ignore
  const lastNarratives = narrLast.map((narr, i) => {
    let narrRender =
      locale == "ua"
        ? // @ts-ignore
          narr.ua
        : // @ts-ignore
        locale == "de"
        ? // @ts-ignore
          narr.de
        : locale == "pl"
        ? // @ts-ignore
          narr.pl
        : locale == "en"
        ? // @ts-ignore
          narr.en
        : locale == "sk"
        ? // @ts-ignore
          narr.sk
        : locale == "it"
        ? // @ts-ignore
          narr.it
        : locale == "hu"
        ? // @ts-ignore
          narr.hu
        : locale == "cs"
        ? // @ts-ignore
          narr.cs
        : locale == "ru"
        ? // @ts-ignore
          narr.ru
        : // @ts-ignore
          narr.ua;
    return (
      <Link key={i} href={{ pathname: `/narrative/${narrRender}` }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.narrativeHeading}
          style={{ marginTop: "1.4rem" }}
        >
          {narrRender}
        </motion.h1>
        <hr
          style={{
            height: "1px",
            background: "rgb(204, 204, 204)",
            border: "none",
          }}
        />
      </Link>
    );
  });

  return (
    <div className={styles.narrativeWrap}>
      {/* @ts-ignore */}
      {lastNarratives}
    </div>
  );
};

export default FivePopNarratives;