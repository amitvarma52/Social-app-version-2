import React from "react";

const NoPost = () => {
  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">No post yet</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Go to create post tab to create awesome and exciting post within a
              moment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPost;
