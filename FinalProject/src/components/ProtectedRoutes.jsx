import { Outlet, Navigate } from "react-router-dom";
import { getUser } from "../../src/utils/auth";
import Swal from "sweetalert2";

const ProtectedRoutes = ({ isAdmin = false }) => {
const usuario = getUser();


  if (!usuario) {
    Swal.fire({ title: "Usuario no autenticado. Redirigiendo...", showConfirmButton: false, timer: 1500 });
    localStorage.removeItem("usuario");
    return <Navigate to="/login" />;
  }

  if (isAdmin && usuario[1] !== "admin") {
    Swal.fire({ title: "Usuario no tiene permisos de administrador. Redirigiendo...", showConfirmButton: false, timer: 1500 });
    localStorage.removeItem("usuario");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;