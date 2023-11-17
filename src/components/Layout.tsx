import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "OpenForumz",
    description: `OpenForumz - Our mission is to break down barriers, allowing users to actively shape and contribute to the evolution of their online space. Embrace the power of open source and be a catalyst for positive change in the digital realm.`,
    image: "/images/logos/logo.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
          <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <main id="skip" className="bg-white dark:bg-neutral-900">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
