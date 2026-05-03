import Link from "next/link";

async function getAnimals() {
  try {
    const res = await fetch("http://localhost:3000/data/animals.json", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Data fetching error:", error);
    return [];
  }
}

export default async function AllAnimalsPage() {
  const animals = await getAnimals();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Explore All Livestock
          </h1>
          <p className="text-gray-600">
            Find the healthiest animals for your Qurbani from our verified collection.
          </p>
        </div>

        {animals.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-red-500 font-bold">No animals found. Please check your data source.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal) => (
              <div 
                key={animal.id} 
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1 rounded-full font-bold shadow-lg">
                    ৳ {animal.price.toLocaleString()}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{animal.name}</h2>
                    <span className="text-[10px] uppercase tracking-widest bg-gray-100 text-gray-500 px-2 py-1 rounded-md font-bold">
                      {animal.breed}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex flex-col pl-2 border-l-2 border-green-500">
                      <span className="text-xs text-gray-400">Weight</span>
                      <span className="font-semibold text-gray-800">{animal.weight} kg</span>
                    </div>
                    <div className="flex flex-col pl-2 border-l-2 border-green-500">
                      <span className="text-xs text-gray-400">Location</span>
                      <span className="font-semibold text-gray-800">{animal.location}</span>
                    </div>
                    <div className="flex flex-col pl-2 border-l-2 border-green-500">
                      <span className="text-xs text-gray-400">Age</span>
                      <span className="font-semibold text-gray-800">{animal.age} yrs</span>
                    </div>
                    <div className="flex flex-col pl-2 border-l-2 border-green-500">
                      <span className="text-xs text-gray-400">Category</span>
                      <span className="font-semibold text-gray-800">{animal.type}</span>
                    </div>
                  </div>

                  <Link 
                    href={`/all-animals/${animal.id}`}
                    className="block w-full text-center bg-gray-900 hover:bg-green-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}