import { Navigate, Outlet } from "react-router-dom";
interface PropType {
  user: any;
  // children: any;
}
const ProtectedRoute = (props: PropType) => {
  if (!props.user) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

export { ProtectedRoute };
