import React from "react";
import SectionHeading from "../../../Components/SectionHeading";
import popular from "../../../Images/Card/product-img-1.jpg";

const PopularSales = () => {
  return (
    <section className="mt-12">
      <div className="container-x mx-auto">
        <SectionHeading title="Popular Sales" />
        <div className="grid grid-cols-3 gap-x-6">
          <div className="popular-box bg-white flex items-center px-3 py-2 border-2 border-gray-50">
            <div className="popular-img">
              <img src={popular} alt="popular-img" />
            </div>
            <div className="popular-text ml-3">
              <h3 className="line-clamp-1 font-semibold mb-2">
                Xoggle aute et pariatur adipisicing nostrud et excepteur
              </h3>
              <div className="price flex">
                <h2 className="font-bold line-through text-gray-400 text-xl">
                  $27.27
                </h2>
                <h2 className="font-bold ml-3 text-red-500 text-xl">$18.73</h2>
              </div>
            </div>
          </div>
          <div className="popular-box bg-white flex items-center px-3 py-2 border-2 border-gray-50">
            <div className="popular-img">
              <img src={popular} alt="popular-img" />
            </div>
            <div className="popular-text ml-3">
              <h3 className="line-clamp-1 font-semibold mb-2">
                Xoggle aute et pariatur adipisicing nostrud et excepteur
              </h3>
              <div className="price flex">
                <h2 className="font-bold line-through text-gray-400 text-xl">
                  $27.27
                </h2>
                <h2 className="font-bold ml-3 text-red-500 text-xl">$18.73</h2>
              </div>
            </div>
          </div>
          <div className="popular-box bg-white flex items-center px-3 py-2 border-2 border-gray-50">
            <div className="popular-img">
              <img src={popular} alt="popular-img" />
            </div>
            <div className="popular-text ml-3">
              <h3 className="line-clamp-1 font-semibold mb-2">
                Xoggle aute et pariatur adipisicing nostrud et excepteur
              </h3>
              <div className="price flex">
                <h2 className="font-bold line-through text-gray-400 text-xl">
                  $27.27
                </h2>
                <h2 className="font-bold ml-3 text-red-500 text-xl">$18.73</h2>
              </div>
            </div>
          </div>
          <div className="popular-box bg-white flex items-center px-3 py-2 border-2 border-gray-50">
            <div className="popular-img">
              <img src={popular} alt="popular-img" />
            </div>
            <div className="popular-text ml-3">
              <h3 className="line-clamp-1 font-semibold mb-2">
                Xoggle aute et pariatur adipisicing nostrud et excepteur
              </h3>
              <div className="price flex">
                <h2 className="font-bold line-through text-gray-400 text-xl">
                  $27.27
                </h2>
                <h2 className="font-bold ml-3 text-red-500 text-xl">$18.73</h2>
              </div>
            </div>
          </div>
          <div className="popular-box bg-white flex items-center px-3 py-2 border-2 border-gray-50">
            <div className="popular-img">
              <img src={popular} alt="popular-img" />
            </div>
            <div className="popular-text ml-3">
              <h3 className="line-clamp-1 font-semibold mb-2">
                Xoggle aute et pariatur adipisicing nostrud et excepteur
              </h3>
              <div className="price flex">
                <h2 className="font-bold line-through text-gray-400 text-xl">
                  $27.27
                </h2>
                <h2 className="font-bold ml-3 text-red-500 text-xl">$18.73</h2>
              </div>
            </div>
          </div>
          <div className="popular-box bg-white flex items-center px-3 py-2 border-2 border-gray-50">
            <div className="popular-img">
              <img src={popular} alt="popular-img" />
            </div>
            <div className="popular-text ml-3">
              <h3 className="line-clamp-1 font-semibold mb-2">
                Xoggle aute et pariatur adipisicing nostrud et excepteur
              </h3>
              <div className="price flex">
                <h2 className="font-bold line-through text-gray-400 text-xl">
                  $27.27
                </h2>
                <h2 className="font-bold ml-3 text-red-500 text-xl">$18.73</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSales;
