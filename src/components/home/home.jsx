import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <h2>Home</h2>
      <div className="flex items-center justify-around p-20">
        <div className="w-1/2">
          <p className="text-[20px] font-semibold">
            Find everything from A-Z, High quality from top brands, At lowest
            prices
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="w-full object-cover font-shit bg"
            src="https://images.unsplash.com/photo-1613332098721-054a53462d12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-around bg-blue-800 p-20 text-white">
        <div clasclassName="w-1/2">
          <p className="text-[20px] font-semibold">
            Shop from home with our worldwide shipping service
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="w-full object-cover"
            src="https://images.pexels.com/photos/6393352/pexels-photo-6393352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-around p-20">
        <div className="w-1/2">
          <p className="text-[20px] font-semibold">
            Got problems? Reach to us via our 24/7 customer service
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="w-full object-cover"
            src="https://images.pexels.com/photos/8867213/pexels-photo-8867213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <button
        className="m-[50px] w-[200px] self-center rounded-[8px] border border-green-900 bg-green-500 p-2.5 text-2xl shadow-black/50 transition-transform hover:scale-110 hover:shadow-md"
        onClick={() => {
          navigate("/shop");
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

// loving woman is an illustration in my mind, it's not a real important
// thing, but the real thing is that im going to die, and going to face
// allah, and the real thing is a wife not an untouchable photo,
// imagining and rubbing myself will only make me far from reaching the
// real wife;

export default Home;
