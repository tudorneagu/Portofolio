import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Buttons/Button";

function NotFound() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };
  return (
    <div className="w-full bg-bg-light flex flex-col items-center justify-center ">
      <img src="/404.gif" alt="Funny 404 GIF" className="mb-4" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">
        Oops! The page you are looking for does not exist.
      </p>

      <Button onClick={onClick} content="Take me home" />
    </div>
  );
}

export default NotFound;
