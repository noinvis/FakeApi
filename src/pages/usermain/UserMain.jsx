import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../products/Skeleton";
import Users from "../users/Users";

const UserMain = () => {
  const { data, error, loading } = useFetch("/users");

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
        {loading ? <Skeleton /> : <Users data={data} />}
      </div>
    </div>
  );
};

export default UserMain;
