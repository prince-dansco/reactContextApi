import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { myContext } from "../context/Context";

const NavActive = () => {
  const {getPost, posts, isLoading, error } = useContext(myContext)

  useEffect(()=>{
    getPost("https://fakestoreapi.com/products")
  },[])

  return (
    <div>
      {isLoading && <h2>loading...</h2>}
      {error && <h1>{error}</h1>}
      <div className="main-wrapper">
        {posts.length > 0 ? (
          posts.map((item) => (
            <div className="wrapper" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="sub-wrapper">
                <p>{item.title}</p>
                <Link to={`/Instagrame/${item.id}`}>
                  <button className="btn">View More</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>no data here</p>
        )}
      </div>
    </div>
  );
};

export default NavActive;
