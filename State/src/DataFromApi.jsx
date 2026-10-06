
import { use } from "react";
import { useState } from "react";

const DataFromApi = ({ api }) => {
  const posts = use(api);

  // Stores the ID of the currently expanded card
  const [readMore, setReadMore] = useState(null);

  const handleReadMore = (id) => {
    setReadMore(readMore === id ? null : id);
  };

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "green",
        }}
      >
        Posts from API
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
          alignItems: "start", // ⭐ important
        }}
      >
        {posts.map((post) => {
          const isOpen = readMore === post.id;

          return (
            <div
              key={post.id}
              style={{
                border: "1px solid red",
                backgroundColor: "red",
                height: isOpen ? "auto" : "150px", // Adjust height based on state
                overflow: "hidden", // Hide overflow when collapsed
                padding: "20px",
                margin: "10px",
                borderRadius: "50px",
              }}
            >
              <h3 style={{ textTransform: "capitalize" }}>
                {post.title}
              </h3>

              {isOpen ? (
                <>
                  {/* Body */}
                  <p>{post.body}</p>

                  {/* Read Less BELOW body */}
                  <button onClick={() => handleReadMore(post.id)}>
                    Read Less
                  </button>
                </>
              ) : (
                <button onClick={() => handleReadMore(post.id)}>
                  Read More
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DataFromApi;

