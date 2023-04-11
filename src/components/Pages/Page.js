// next
import Head from "next/head";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Page = ({ children, title = "", meta, ...other }) => (
  <>
    <Head>
      <title>{`${title} | EMR`}</title>      
      {meta}
    </Head>

    <Box {...other}>{children}</Box>
  </>
);

Page.displayName = "Page";

export default Page;
