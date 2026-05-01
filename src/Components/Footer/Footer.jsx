const Footer = () => {

  return (

    <div className="bg-black text-white mt-20">

      <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>

          <h2 className="text-2xl font-bold ">
            QurbaniHat
          </h2>

          <p className="text-gray-300">
            Trusted livestock marketplace
          </p>

        </div>

        <div className="space-y-3">

          <h3 className="font-bold  ">
            Contact
          </h3>

          <p className="text-gray-300">01700000000</p>
          <p className="text-gray-300">qurbaniwala@gmail.com</p>

        </div>

        <div className="space-y-3">

          <h3 className="font-bold">
            Social
          </h3>

          <p className="text-gray-300">Facebook</p>
          <p className="text-gray-300">Instagram</p>
          <p className="text-gray-300">TikTok</p>
          

        </div>

      </div>

    </div>
  );
};

export default Footer;