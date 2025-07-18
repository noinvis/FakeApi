import { useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import img from "../../imgs/img.jpg";

const DetailUsers = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/users/${id}`);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <p>Something went wrong :(</p>;
  }

  return loading ? (
    <div className="flex justify-center items-center h-[550px]">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="container flex justify-center items-center py-[50px] max-[1200px]:flex-col max-[1200px]:gap-[30px]">
      <div className="shadow-xl rounded-2xl p-[30px] max-[500px]:p-[10px] flex flex-col justify-center gap-[12px]">
        <img src={img} alt={data.username} width="350px"  className="mx-auto rounded-2xl"/>
        <div className="flex justify-between">
            <p className="">Username:</p>
            <p className="font-semibold">{data.username}</p>
        </div>
        <div className="flex justify-between">
            <p className="">Email:</p>
            <p className="font-semibold">{data.email}</p>
        </div>
        <div className="flex justify-between">
            <p className="">Password:</p>
            <p className="font-semibold">{data.password}</p>
        </div>
        <div className="flex gap-[1rem] mt-[10px]">
            <button
            className="bg-slate-900 text-white py-[1rem] w-full rounded-2xl"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button className="bg-slate-900 text-white py-[1rem] w-full rounded-2xl">
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailUsers;
