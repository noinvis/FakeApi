import { useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { IoStarSharp } from "react-icons/io5";

const DetailProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/products/${id}`);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <p>Something went wrong :(</p>;
  }

  return loading ? (
    <div className="flex justify-center items-center h-[900px]">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="container2 flex justify-between items-center py-[50px] max-[1200px]:flex-col max-[1200px]:gap-[30px]">
      <div className="w-[65%] border rounded-2xl p-[30px] max-[1200px]:w-full max-[500px]:p-[10px]">
        <h2 className="text-center text-[30px] mt-[20px]">{data?.title}</h2>
        <p className="text-center text-[20px]">{data?.category}</p>
        <div className="flex justify-center py-[30px] overflow-hidden h-[600px]">
          <img
            src={data?.image}
            alt={data?.title}
            className="hover:scale-105 duration-300"
          />
        </div>
        <div className="bg-slate-900 p-[30px] rounded-2xl text-white">
          <p className="">{data?.description}</p>
        </div>
      </div>
      <div className="w-[30%] border rounded-2xl p-[30px] max-[1200px]:w-full h-[890px] max-[1200px]:h-auto">
        <div className="flex gap-[2rem] justify-center">
          <p className="text-[30px] line-through text-red-600 max-[400px]:text-[18px]">
            {data?.price} USD
          </p>
          <p className="text-[30px] text-green-600 max-[400px]:text-[18px]">
            {String(data?.price - 10).slice(0, 5)} USD
          </p>
        </div>
        <p className="text-center text-[30px] max-[400px]:text-[18px]">
          10% Chegirma
        </p>
        <div className="text-amber-300 text-[34px] flex items-center gap-[10px] justify-center max-[450px]:flex-col">
          <span className="text-[2rem] text-black mt-[3px] max-[400px]:text-[18px]">
            Rating:{data?.rating.rate}
          </span>
          <div className="flex">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
        </div>
        <div className="flex gap-[1rem] mt-[140%] max-[1200px]:mt-[30px] max-[450px]:flex-col">
          <button
            className="bg-slate-900 text-white py-[1rem] px-[40px] w-full rounded-2xl"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button className="bg-slate-900 text-white py-[1rem] px-[40px] w-full rounded-2xl">
           Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
