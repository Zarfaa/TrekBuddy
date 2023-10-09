import React, { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const Account = lazy(() => import("../Components/MyAccount/index"));

const MyAccount = () => {
  return (
    <Suspense
    fallback={
      <div className="loader-wrapper">
        <Loader />
      </div>
    }
  >
    <Account />
  </Suspense>
  )
}

export default MyAccount