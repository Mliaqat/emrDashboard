import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./sideBar.module.scss";
import Link from "next/link";
import React from "react";
import { BellIcon, Emr, MenueIcon } from "../../../../public/Icon/icon";

function SideBar() {
  return (
    <Box
      sx={{
        width: 60,
        height: "100%",
        background: "#191F4F",
        position: "fixed",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", rowGap: 2, py: 2.5 }}
      >
        <Image src="images/logo.svg" height={25} width={25} alt="logo" />
      </Box>

      <Box className={styles.inactive}>
        <Link href="/">
          <span className={styles.icon1}>
            <MenueIcon />
          </span>
        </Link>
      </Box>

      <Box className={styles.inactive}>
        <Link href="/">
          <span className={styles.icon1}>
            <BellIcon />
          </span>
        </Link>
      </Box>

      <Box className={styles.active}>
        <Link href="/" className={styles.menue}>
          <span className={styles.icon}>
            <Emr />
          </span>
        </Link>
      </Box>

      <Box className={styles.inactive}>
        <Link href="/">
          <Image src="images/editbook.svg" height={30} width={30} alt="logo" />
        </Link>
      </Box>

      <Box className={styles.inactive}>
        <Link href="/">
          <Image
            src="images/contactbook.svg"
            height={30}
            width={30}
            alt="logo"
          />
        </Link>
      </Box>

      <Box className={styles.inactive}>
        <Link href="/">
          <Image
            src="images/checklistbook.svg"
            height={30}
            width={30}
            alt="logo"
          />
        </Link>
      </Box>

      <Box className={styles.inactive}>
        <Link href="/">
          <Image src="images/dot.svg" height={30} width={30} alt="logo" />
        </Link>
      </Box>
    </Box>
  );
}

export default SideBar;
