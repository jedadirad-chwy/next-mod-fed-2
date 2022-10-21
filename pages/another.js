import dynamic from "next/dynamic";
const page = import("../realPages/another");

const Page = dynamic(() => import("../realPages/another"));
Page.getInitialProps = async (ctx) => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
