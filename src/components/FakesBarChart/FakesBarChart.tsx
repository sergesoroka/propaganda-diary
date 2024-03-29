import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";
import SpetialText from "../../../data/SpetialText";

let defaultFakesNumber = 5;

export const FakesBarChart = () => {
  const router = useRouter();
  const { data } = useLangSwitcher();

  const uniqueNarrativesEn: string[] = [];
  // @ts-ignore
  data.map((c) => {
    if (!uniqueNarrativesEn.includes(c.Narrative)) {
      uniqueNarrativesEn.push(c.Narrative);
    }
    return c;
  });

  let defaultNarrative = router.query.id;
  // @ts-ignore
  const [title, setTitle] = useState<string | null>(defaultNarrative);
  const [fakes, setFakes] = useState<number>(defaultFakesNumber);

  const renderNarratives = uniqueNarrativesEn.map((item, i) => {
    const uniqueFakes: string[] = [];

    // @ts-ignore
    data.map((fake) => {
      if (!uniqueFakes.includes(fake.Fake) && fake.Narrative === item) {
        uniqueFakes.push(fake.Fake);
      }
    });
    return (
      <Link key={i} href={{ pathname: `/narrative/${item}` }}>
        <rect
          width="30"
          height={uniqueFakes.length * 4}
          fill={title === item ? "#ff2618" : "#ccc"}
          x={i * 35}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setTitle(item);
            // @ts-ignore
            setFakes(uniqueFakes.length);
          }}
        />
      </Link>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <div>
        <p className={styles.fakesNumber}>
           <SpetialText name={"Fakes"} />: {fakes}
        </p>
        <svg width="950" height="200" style={{ transform: "scaleY(-1)" }}>
          {renderNarratives}
        </svg>
      </div>
      {/* <div>{renderNarrativesMobie}</div> */}
    </motion.div>
  );
};
