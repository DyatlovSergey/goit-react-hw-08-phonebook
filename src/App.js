// import Contacts from "./Components/AddContacts/AddContacts";
// import Phonebook from "./Components/Phonebook";
// import Filter from "./Components/Filter/Filter";
import s from "./Components/Phonebook.module.css";

// const App = () => {
//   return (
//     <section className={s.container}>
//       <Contacts />
//       <Filter />
//       <Phonebook />
//     </section>
//   );
// };

// export default App;

// import s from "./App.module.css";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

import { Suspense, useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshCurrentUser } from "./redux/auth/auth-operations";
import { getIsLoading } from "./redux/auth/auth-selectors";

const PhonebookPage = lazy(() =>
  import(
    "./pages/PhonebookPage/PhonebookPage" /* webpackChunkName: "phonebook-page" */
  )
);
const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const SignInPage = lazy(() =>
  import("./pages/SignInPage/SignInPage" /* webpackChunkName: "sign-in-page" */)
);

const SignUpPage = lazy(() =>
  import("./pages/SignUpPage/SignUpPage" /* webpackChunkName: "sign-up-page" */)
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <div className={s.wrapper}>
        <Header className={s.header} />
        <main className={(s.main, s.phonebookSection)}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<HomePage />} />;
              <Route path="/phonebook" element={<PhonebookPage />} />;
              <Route path="/login" element={<SignInPage />} />;
              <Route path="/register" element={<SignUpPage />} />;
            </Routes>
          </Suspense>
        </main>
        {/* <Footer className={s.footer} /> */}
      </div>
    )
  );
};
export default App;
