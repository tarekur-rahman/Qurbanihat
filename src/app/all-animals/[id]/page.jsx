import Link from "next/link";

async function getAnimal(id) {
  try {
    const res = await fetch("http://localhost:3000/data/animals.json", {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const animals = await res.json();
    return animals.find((item) => item.id.toString() === id.toString());
  } catch (error) {
    return null;
  }
}

export default async function AnimalDetails({ params }) {
  const { id } = await params; 
  const animal = await getAnimal(id);

  if (!animal) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-500">Animal Not Found!</h1>
        <Link href="/all-animals" className="text-blue-500 underline mt-4 block">
          Back to List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-10 bg-white shadow-xl rounded-3xl mt-10">
      <img src={animal.image} alt={animal.name} className="w-full h-[450px] object-cover rounded-2xl mb-8 shadow-md" />
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-black text-gray-900">{animal.name}</h1>
        <p className="text-3xl text-green-600 font-extrabold">৳ {animal.price.toLocaleString()}</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <span className="block text-gray-400 text-xs font-bold uppercase">Weight</span>
          <span className="text-lg font-bold text-gray-800">{animal.weight} kg</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <span className="block text-gray-400 text-xs font-bold uppercase">Location</span>
          <span className="text-lg font-bold text-gray-800">{animal.location}</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <span className="block text-gray-400 text-xs font-bold uppercase">Age</span>
          <span className="text-lg font-bold text-gray-800">{animal.age} yrs</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <span className="block text-gray-400 text-xs font-bold uppercase">Breed</span>
          <span className="text-lg font-bold text-gray-800">{animal.breed}</span>
        </div>
      </div>

      <div className="mt-10 border-t pt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Description</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{animal.description}</p>
      </div>

      <div className="mt-12 flex gap-4">
        <Link href="/all-animals" className="flex-1 text-center bg-gray-100 text-gray-800 font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all">
          Back to List
        </Link>
        <button className="flex-1 bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-100 hover:bg-green-700 transition-all">
          Contact for Purchase
        </button>
      </div>
    </div>
  );
}