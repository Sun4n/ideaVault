import { Suspense } from "react";
import LoginFrom from "./LoginFrom";

const LoginInPage = () => {
    <Suspense fallback={<div>Loading...</div>}>
        <LoginFrom></LoginFrom>
    </Suspense>
};

export default LoginInPage;