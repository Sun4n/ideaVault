import { Suspense } from "react";
import LoginFrom from "./LoginFrom";

const LoginInPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginFrom />
    </Suspense>
  );
};

export default LoginInPage;