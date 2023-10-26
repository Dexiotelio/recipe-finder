import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 2000);

  return (
    <main>
      <div className="error-page">
        <h1>¡Ups!, Ha ocurrido un error</h1>
        <h3>Será redirigido a la página principal</h3>
      </div>
    </main>
  );
}
