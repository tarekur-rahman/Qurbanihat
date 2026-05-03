import Banner from "@/components/Banner";
import Link from "next/link";

export default async function Home() {
  let animals = [];
  try {
    const res = await fetch("http://localhost:3000/data/animals.json", {
      cache: "no-store",
    });
    if (res.ok) {
      animals = await res.json();
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <main>
      <Banner />

      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Animals
        </h2>

        {animals.length === 0 ? (
          <p className="text-center text-red-500">No data found!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.slice(0, 6).map((animal) => (
              <div 
                key={animal.id} 
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <img 
                  src={animal.image} 
                  alt={animal.name} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800">{animal.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{animal.breed} - {animal.location}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold text-lg">
                      ৳ {animal.price.toLocaleString()}
                    </span>
                    <Link 
                      href={`/all-animals/${animal.id}`}
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link 
            href="/all-animals" 
            className="inline-block border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-600 hover:text-white transition-all"
          >
            See All Animals
          </Link>
        </div>
      </section>
    </main>
  );
}