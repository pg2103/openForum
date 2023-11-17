import { useEffect } from "react";
import Layout from "./Layout";
import { getFirebaseAuth, setLoginCookie } from "@/auth/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const MainLayout = (props: any) => {
    const { children, ...customMeta } = props;

    const router = useRouter();

    useEffect(
        () => {
          getFirebaseAuth().onAuthStateChanged(async function(user) {
            if (user) {
              await setLoginCookie();
            } else {
              router.replace('/login');
            }
          });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );

    return (
      <>
        <Layout>{children}</Layout>
        <div className="bg-white dark:bg-neutral-900" style={{ height: '7vh', width: '100%', display: 'flex', justifyContent: 'end' }}>
          <div style={{ marginBottom: '2vh', display: 'flex', flexDirection: 'row' }}>
            <Link target="blank" href="https://www.sergiu-nistor.com">
            <Image
                src="/images/logos/dev.png"
                alt="Dev Icon"
                width={48}
                height={48}
                quality={100}
                priority
                style={{ marginRight: '1rem' }}
              />
              </Link>

              <Link target="blank" href="https://twitter.com/SergiuNistor6">
              <Image
                src="/images/logos/twitter.png"
                alt="Twitter Icon"
                width={48}
                height={48}
                quality={100}
                priority
                style={{ marginRight: '1rem' }}
              />
              </Link>

              <Link target="blank" href="https://github.com/SergiuDeveloper/OpenForumz">
              <Image
                src="/images/logos/github.png"
                alt="Github Icon"
                width={48}
                height={48}
                quality={100}
                priority
                style={{ marginRight: '1rem' }}
              />
              </Link>
            </div>
        </div>
      </>
    )
}

export default MainLayout;
