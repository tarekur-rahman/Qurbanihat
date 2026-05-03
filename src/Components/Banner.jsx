import Link from "next/link";

const Banner = () => {
  return (
    <div 
      className="min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/qurbani.PNG')" }}
    >
      <div className="text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Welcome to <span className="text-green-500">QurbaniHat</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          Find the best and healthiest animals for your Qurbani. Browse through our wide collection of cows and goats from top breeds across the country.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/all-animals" 
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg font-bold transition-all shadow-lg text-center"
          >
            Browse Animals
          </Link>
          <Link 
            href="/register" 
            className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold transition-all text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;