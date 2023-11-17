import { useState } from "react";
import { Spinner } from "./Spinner";

export const Main = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  
  return (<>
    {!!dataLoaded &&
    <div className="bg-white dark:bg-neutral-900" style={{ height: '93vh' }}>
      <div className="max-w-7xl mx-auto pt-40 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-40 justify-center text-center sm:justify-start sm:text-start">
          
        </div>
      </div>
    </div>
    }
    {!dataLoaded &&
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '93vh', width: '100vw' }}>
      <Spinner />
    </div>
    }
  </>);
}
