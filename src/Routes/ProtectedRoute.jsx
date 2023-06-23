import { Navigate, Outlet, useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { IsLoginSelector } from "../recoil/AtomUserState";

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(IsLoginSelector)

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/login"}
      replace
    />
  );
};

export default ProtectedRoute;