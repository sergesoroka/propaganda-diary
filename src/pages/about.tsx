import Head from "next/head";
import AboutUa from "@/components/About/AboutUa";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
// import AboutIt from "@/components/About/AboutIt";

export default function AboutEn() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <Head>
        <title>Propaganda Diary | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "tween" }}
        className={styles.mainLeft}
      >
         {/* {locale === "ua" && <AboutUa />} */}
         <AboutUa />
    
      </motion.div>
    </div>
  );
}
