import Image from "next/image";
import { ReactElement, useCallback, useEffect, useState } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirebaseAuth, setLoginCookie } from '@/auth/auth';
import { useRouter } from "next/router";
import { Spinner } from "./Spinner";

export const Login = () => {
  const [authWidget, setAuthWidget] = useState<ReactElement<any, any> | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  const router = useRouter();

  const login = useCallback(async () => {
    setLoginLoading(true);

    await setLoginCookie();
    
    await router.replace('/');
  }, []);

  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult: any, redirectUrl: any) {
        login();
        return false;
      }
    },
    signInFlow: process.env.NODE_ENV == "development" ? 'popup' : 'redirect',
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID
    ]
  };

  useEffect(() => {
    setAuthWidget(<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getFirebaseAuth()} />);
  }, [])

  return (<>
    {!!authWidget &&
    <div className="bg-white dark:bg-neutral-900" style={{ height: '100vh' }}>
      <div className="max-w-7xl mx-auto pt-40 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-40 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
            Welcome to <br />{" "}
            <span className="text-rose-500 font-extrabold">OpenForumz</span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
          Join us in redefining social connectivity. <br/>
          Our mission is to break down barriers, allowing users to actively shape and contribute to the evolution of their online space. <br/>
          Embrace the power of open source and be a catalyst for positive change in the digital realm.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              {!loginLoading && authWidget}
              {!!loginLoading && <div className="flex flex-auto justify-center" style={{ width: '100%' }}><Spinner /></div>}
            </div>
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src="/images/hero/hero.png"
            alt="Image hero description"
            width={1025}
            height={662}
            quality={100}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
    }
    {!authWidget &&
      <Spinner />
    }
  </>);
}
