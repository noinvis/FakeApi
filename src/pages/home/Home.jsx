import Products from "../products/Products";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../products/Skeleton";

const Home = () => {
  const { data, error, loading } = useFetch("/products");

  return (
    <div className="container2">
      <div className="">
        {error && (
          <div>
            <h2 style={{ color: "red", textAlign: "center" }}>
              Something went wrong :(
            </h2>
          </div>
        )}
        {loading ? <Skeleton /> : <Products data={data} />}
      </div>
    </div>
  );
};

export default Home;
