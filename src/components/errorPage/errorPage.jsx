import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-[length:100px] bg-[url('/public/cat.webp')]">
      <img
        className="w-[300px] p-10 [background:var(--color-stupid)]"
        src="https://preview.redd.it/06mc6ezq8uiz.jpg?width=640&crop=smart&auto=webp&s=6ae3266af4f7b4f4d07e4fa3a7faa30348bef43e"
        alt=""
      />
      <h1 className="stupid-text">A very dangerous error has occured</h1>
      <p className="stupid-text">
        Hmm, there are two main reasons for this to happen
      </p>
      <p className="stupid-text">
        First, You are trying to mess with my website
      </p>
      <p className="stupid-text">
        Second, there's a problem with my website that I'm very lazy to fix
      </p>
      <p className="stupid-text">
        Anyways let's get you back to the home page before you get a headache
      </p>
      <div>
        <button
          className="mt-20 p-10 transition-transform duration-200 [background:var(--color-stupid)] hover:skew-x-[30deg] hover:skew-y-[40deg]"
          onClick={() => {
            navigate("/");
          }}
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
