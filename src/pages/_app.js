import "@/styles/globals.css";
import "@/styles/bootstrap.min.css";
import "@/styles/all-fontawesome.min.css";
import "@/styles/magnific-popup.min.css";
import "@/styles/nice-select.min.css";
// import "@/styles/jquery-ui.min.css";
import "@/components/loader/loader.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "@/styles/styles.css";
import "@/styles/responcive.css"

import { Suspense, createContext, useEffect, useState } from "react";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import { getAllMastersTypes } from "@/components/endPoints/masterEndPoints";
import {
  BallTriangleComponent,
  DNAComponent,
} from "@/components/loader/Loader";
import { useRouter } from "next/router";

import { UserProvider } from "../context/UserContext";

export const MastersContext = createContext(null);
export const ProjectContext = createContext(null);

export const getArrayItem = (array = [], key, value, name) => {
  let obj = array.find((item) => {
    return item[key] == value;
  });
  return obj?.[name];
};

export default function App({ Component, pageProps }) {
  const [masters, setMasters] = useState();
  const [projects, setProjects] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(true);
    }, 3000);
  }, []);

  return (
    <MastersContext.Provider value={{ masters, setMasters }}>
      <ProjectContext.Provider value={{ projects, setProjects }}>
        <Suspense fallback={<DNAComponent />}>
          <UserProvider>
            <Header />
            <Component key={router.asPath} {...pageProps} />
            <Footer />
          </UserProvider>
        </Suspense>
      </ProjectContext.Provider>
    </MastersContext.Provider>
  );
}
