import { Navigate, Outlet } from "react-router";
import { useRecoilValue } from "recoil";
import { IsLoginSelector } from "../recoil/AtomUserState";

export const NonLoginProtectedRoute = () => {
  const isLogin = useRecoilValue(IsLoginSelector);
  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/splash"}
      replace
    />
  );
};

export const LoginProtectedRoute = () => {
  const isLogin = useRecoilValue(IsLoginSelector);
  return !isLogin ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/feed"}
      replace
    />
  );
}
