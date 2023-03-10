import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Header.module.css";

const Navbar = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <ul className={styles.navbarWrap}>
      <Link href="/about">
        <li className={pathname === "/about" ? styles.activeLink : ""}>
          About
        </li>
      </Link>
      <Link href="/method">
        <li className={pathname === "/method" ? styles.activeLink : ""}>
          Method
        </li>
      </Link>

      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSdHdlCAbi-plsJ49Q_daSIMPud7rzIaeQLwcvtYnjEnFOn1eA/viewform"
        passHref
        target="_blank"
      >
        <li className={pathname === "/method" ? styles.activeLink : ""}>
          Add Fake
        </li>
      </Link>

      <Link
        href="https://docs.google.com/spreadsheets/d/1j5JuUDCpc7T9cAXqHC7MOe8mBsOJiw1SH5JzoUxFIYk/edit#gid=0"
        passHref
        target="_blank"
      >
        <li className={pathname === "/method" ? styles.activeLink : ""}>
          Download
        </li>
      </Link>
      <Link href="/archive">
        <li className={pathname === "/archive" ? styles.activeLink : ""}>
          Archive
        </li>
      </Link>
      <Link href="/search">
        <li style={{marginTop: '4px'}}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.8171 19.7962C16.6921 22.9225 11.6227 22.9254 8.49415 19.8028C5.36561 16.6801 5.36268 11.6143 8.48761 8.48804C11.6125 5.36176 16.682 5.35883 19.8105 8.4815C22.9391 11.6042 22.942 16.6699 19.8171 19.7962ZM20.4904 21.8817C16.5615 25.1025 10.7516 24.8818 7.08024 21.2173C3.16992 17.3143 3.16626 10.9827 7.07207 7.07516C10.9779 3.16766 17.3141 3.16399 21.2244 7.06698C24.8958 10.7314 25.1234 16.5368 21.9049 20.4667L29.0201 27.5686L27.6057 28.9836L20.4904 21.8817Z"
              fill="#676767"
            />
          </svg>
        </li>
      </Link>
    </ul>
  );
};

export default Navbar;
