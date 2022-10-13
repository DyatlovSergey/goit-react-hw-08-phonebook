import s from "./Components/Phonebook.module.css";
import Header from "./Components/Header/Header";
import { Suspense, useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshCurrentUser } from "./redux/auth/auth-operations";
import { getIsLoading } from "./redux/auth/auth-selectors";

const PhonebookPage = lazy(() => import("./pages/PhonebookPage/PhonebookPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <div className={s.container}>
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
      </div>
    )
  );
};
export default App;
