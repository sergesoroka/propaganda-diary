import Head from "next/head";
import styles from "../styles/Home.module.css";

// import Table from "../../components/Table/Table";

// import { tableEng } from "../../data/tableEng";

export default function MethodEn() {
  return (
    <div>
      <Head>
        <title>Propaganda Diary | How</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainLeft}>
        <p className={styles.c14}>
          <span className="c13">
            The project “Propaganda diary” on disinformation about Ukraine in
            German and Italian media is based on methodology. Here you can get
            the information about our methods and policies.
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c10">White and black lists of media</span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            First, to form the database on disinformation it was necessary to
            identify key media outlets in relevant countries and distinguish
            credible sources from questionable ones. Thus, we created white and
            black lists of media in Germany and Italy.{" "}
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            Media on the white list are high-quality media providing reliable
            information about Ukraine’s foreign and domestic policies. On the
            contrary, sources on the black list spread fake news about Ukraine
            on a regular basis.
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            To differentiate sources and create these lists we used the
            following criteria:
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <ul className={styles.aboutList}>
          <li className="c19 c6 li-bullet-0">
            <span className="c17">Content</span>
            <span className="c13">
              . All media outlets, either on the white list or on the black
              list, regularly report news and publish analytical articles about
              politics, international relations, Ukraine in particular.
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c17">Professional standards</span>
            <span className="c13">
              . The high-quality media on the white list must meet the
              journalistic standards: comprehensiveness and impartiality of news
              coverage; objectivity and emotional neutrality; balance of
              opinions; availability and reliability of information sources;
              separation of facts and comments. Media on the black list
              constantly neglect these standards when reporting about Ukraine.
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c17">Ownership and transparency</span>
            <span className="c13">
              . The media must publicly report about its owner, funding, and
              possible conflict of interest. For example, some Italian and
              German media are directly linked to Russian state-owned news
              agencies. Thus, such media will most likely spread disinformation
              about Ukraine.
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c17">
              Results of media monitoring from Media Bias / Fact Check
            </span>
            <span className="c21">
              . We selected some of the media according to the resource{" "}
            </span>
            <span className="c0">
              <a
                className={styles.c8}
                href="https://www.google.com/url?q=https://mediabiasfactcheck.com/&amp;sa=D&amp;source=editors&amp;ust=1652627142327710&amp;usg=AOvVaw0cf1sv_p4wXPsvLHB8JNxX"
              >
                Media Bias / Fact Check
              </a>
            </span>
            <span className="c13">
              , an independent website that rates the bias, factual accuracy,
              and credibility of sources. According to this resource, the
              selected media on the black list have a very low or mixed level of
              factual reporting. The media on the white list are rated at the
              least biased sources and have a high level of factual reporting.
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c17">
              Results of media monitoring from EUvsDisinfo
            </span>
            <span className="c21">
              . In addition, we used EUvsDisinfo databases on{" "}
            </span>
            <span className="c0">
              <a
                className={styles.c8}
                href="https://www.google.com/url?q=https://euvsdisinfo.eu/disinformation-cases/?text%3D%26date%3D%26disinfo_language%255B%255D%3DGerman%26disinfo_countries%255B%255D%3D77554%26per_page%3D&amp;sa=D&amp;source=editors&amp;ust=1652627142328321&amp;usg=AOvVaw3J5DF4y5q6upgH87sCQYP4"
              >
                Germany
              </a>
            </span>
            <span className="c21">&nbsp;and </span>
            <span className="c0">
              <a
                className={styles.c8}
                href="https://www.google.com/url?q=https://euvsdisinfo.eu/disinformation-cases/?text%3D%26date%3D%26disinfo_language%255B%255D%3DItalian%26disinfo_countries%255B%255D%3D77582%26per_page%3D&amp;sa=D&amp;source=editors&amp;ust=1652627142328653&amp;usg=AOvVaw0v5pw1g04H4UafrM5u27o4"
              >
                Italy
              </a>
            </span>
            <span className="c21">
              , as well as cases of fake distribution recorded by German and
              Italian fact-checkers, who signed the IFCN Code of Principle.{" "}
            </span>
            <span className="c0">
              <a
                className={styles.c8}
                href="https://www.google.com/url?q=https://euvsdisinfo.eu/about/&amp;sa=D&amp;source=editors&amp;ust=1652627142328955&amp;usg=AOvVaw0Wcu_MdadqoQ9DRPpFPB22"
              >
                EUvsDisinfo
              </a>
            </span>
            <span className="c13">
              &nbsp;is the project of the European External Action Service’s
              East StratCom Task Force. It was established specifically to
              monitor and counter the Russian disinformation campaigns in
              Europe.
            </span>
          </li>
          <li className="c6 c19 li-bullet-0">
            <span className="c17">Results of our own media monitoring. </span>
            <span className="c13">
              When selecting media for monitoring, we have focused on the
              quality of reporting about Ukraine. The sources that published
              Russian disinformation previously were added to the black list.
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c17">
              Consultations with German and Italian fact-checkers and
              journalists.{" "}
            </span>
            <span className="c13">
              We also sought advice from colleagues working in Germany and
              Italy. Representatives from different organizations advised us to
              pay attention to some media which were previously spreading fake
              news.
            </span>
          </li>
        </ul>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c10">Disinformation narratives</span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            The database consists of hundreds of manipulative news reports from
            German and Italian media. To categorize this dataset we
            classNameified news reports into dangerous and destabilizing
            narratives of the Russian disinformation campaign.
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            Different news reports are examples of a single disinformation
            narrative when they convey the same message, either explicit or
            hidden, intended to influence public opinion in relevant countries
            by distorting the picture of reality. All the narratives in the
            database are typical messages for the Russian disinformation
            campaign against Ukraine. For instance, “Ukraine is continuing
            military buildup in Donbas” and “Ukraine is violating the ceasefire
            regime” can be clear examples of the narrative “Ukraine fails to
            deliver commitments under the Minsk Agreements”, as they have the
            same meaning and purpose in terms of disinformation.
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            There are also subtypes of disinformation narratives. These subtypes
            specify the general narrative. For example, “The U.S. organized coup
            d&apos;état in Ukraine in 2014” is a subtype of the narrative
            “Maidan in 2014 was a coup d&apos;état”.
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            However, it is often impossible to identify the exact motives of
            authors, who participated in spreading fake news. Therefore we
            cannot confirm that all these authors and media spread
            disinformation about Ukraine on purpose. At the same time narratives
            in these media are similar or almost identical to those spread by
            the Russian Federation officials.
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c10">Types of disinformation</span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            Disinformation is false or misleading information spread to
            influence public opinion and/or obscure the truth. It is frequently
            used deliberately as a tool in information warfare. In the case of
            the Ukraine-Russia war, disinformation is used to distort facts
            about Ukraine’s foreign and domestic policies and to create a
            negative image of Ukraine in the media and international politics.
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className="c6 c14">
          <span className="c13">
            During the evaluation of the German and Italian media from the black
            list we render the following verdicts for each disinformation
            material:
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <ul className={styles.aboutList}>
          <li className="c19 c6 li-bullet-0">
            <span className="c17">Fake</span>
            <span className="c13">
              : the information is completely false and based on questionable
              sources.
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c17">Manipulation</span>
            <span className="c13">
              : the information is partly true, but presented in a distorted
              context or not completely. The author of the manipulation is
              trying to convey a false message.
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c17">Conspiracy theory: </span>
            <span className="c13">
              the information is false, but it is based on completely
              non-fact-checkable claims, i.e. some theories that explain events
              as a result of a secret plot.
            </span>
          </li>
        </ul>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            These types of disinformation are common methods of the Russian
            campaigns against Ukraine. The most common topics among its
            disinformation narratives are:
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <ul className={styles.aboutList}>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">
              the Euromaidan/the Revolution of Dignity in Ukraine;
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">annexation of Crimea;</span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">
              the ongoing Ukraine-Russia war in Donbas;
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">
              historic events, especially connected with the history of
              Ukraine-Russia relations;
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">
              relations of Ukraine with the U.S., NATO, EU and other partners;
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">reforms in Ukraine;</span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">Ukraine’s economy;</span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">
              “nazis and ultra-nationalists” in Ukraine;
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">
              conspiracy theories about “external governance” in Ukraine, i.e.
              influence of the West on Ukraine’s foreign and domestic policies.
            </span>
          </li>
        </ul>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c10">Fact-checking process</span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c13">
            Authors of VoxCheck follow a transparent policy during fact-checking
            and debunking Russian disinformation about Ukraine. In our articles,
            we provide all sources for review in sufficient detail so that
            readers can reproduce our work, except when the personal security of
            the source may be compromised. In such cases, we provide the most
            detailed information. The quality of fact-checking is ensured by the
            project&apos;s editorial board.{" "}
          </span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c21">VoxCheck as </span>
          <span className="c0">
            <a
              className={styles.c8}
              href="https://www.google.com/url?q=https://ifcncodeofprinciples.poynter.org/signatories&amp;sa=D&amp;source=editors&amp;ust=1652627142333946&amp;usg=AOvVaw3UgXtZq39D20CTsyNyTwss"
            >
              a signatory
            </a>
          </span>
          <span className="c21">
            &nbsp;of the IFCN Code of principles abides by the{" "}
          </span>
          <span className="c0">
            <a
              className={styles.c8}
              href="https://www.google.com/url?q=https://www.ifcncodeofprinciples.poynter.org/know-more/the-commitments-of-the-code-of-principles&amp;sa=D&amp;source=editors&amp;ust=1652627142334368&amp;usg=AOvVaw1f7mkLz98SWS4KBwd58Prh"
            >
              commitments to
            </a>
          </span>
          <span className="c13">:</span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <ul className={styles.aboutList}>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">non-partisanship and fairness;</span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">standards and transparency of sources;</span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">
              transparency of funding and organization;
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">
              standards and transparency of methodology;
            </span>
          </li>
          <li className="c19 c6 li-bullet-0">
            <span className="c13">open and honest corrections policy.</span>
          </li>
        </ul>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <p className={styles.c14}>
          <span className="c21">
            You can find additional information about our policies and
            principles on our{" "}
          </span>
          <span className="c0">
            <a
              className={styles.c8}
              href="https://www.google.com/url?q=https://voxcheck.voxukraine.org/&amp;sa=D&amp;source=editors&amp;ust=1652627142335444&amp;usg=AOvVaw0B5X4bImxi3yxpxTUUV3R4"
            >
              official website
            </a>
          </span>
          <span className="c13">.</span>
        </p>
        <p className="c4">
          <span className="c13"></span>
        </p>
        <h3 className="c6 c33" id="h.7145rrc6hi1k">
          <span className="c24">
            Primary sources of fact-checked information about Ukraine
          </span>
        </h3>
        <p className="c22 c6">
          <span className="c25"></span>
        </p>
        <p className="c6 c22">
          <span className="c12"></span>
        </p>
        {/* <Table data={tableEng}/> */}
      </div>
    </div>
  );
}
