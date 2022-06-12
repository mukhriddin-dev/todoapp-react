import React,{ useState, useRef } from "react";

const Modal = () => {
  const modalRef = useRef();
  const [show, setShow] = useState(false);

  const modalHandle = () => {
    setShow((e) => !e);
    console.log("is working");
  };

  setTimeout(() => {
    console.log("ok");
    modalHandle();
  }, 4000);

  return (
    <>
      <div className="container">
        <div
          className="card p-4 mx-auto mt-5 w-50 "
          onClick={modalHandle}
          ref={modalRef}
          style={show ? { display: "block" } : { display: "none" }}
        >
          <div className="card-body">
            <h5 className="card-title">Modal window</h5>

            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus aspernatur nesciunt temporibus corrupti voluptas
              mollitia iusto vitae quod assumenda, nisi aliquam asperiores amet
              tempore dolor consequuntur! Nisi pariatur iste impedit quis
              voluptatibus quas cum maiores nihil doloremque veniam! Corrupti
              eaque nulla obcaecati ea eos aut neque, ad explicabo illo labore
              deleniti iste omnis ex, odit aspernatur sunt quos ut ullam
              voluptas facilis recusandae! Quibusdam, enim fuga. Sint error vel
              possimus sed est porro. Corrupti sit numquam at molestias esse!
              Possimus corporis maiores quos, minima, placeat accusantium eaque
              id nisi ad est harum consequatur repellendus sed laboriosam
              numquam incidunt ipsam aliquam ut delectus velit obcaecati
              sapiente consectetur rem enim! Eum reprehenderit unde impedit
              consequatur possimus, quod veritatis repellat velit tenetur sed
              praesentium illum, perspiciatis quae fuga! Repudiandae
              exercitationem aut ullam voluptatibus ad earum maxime dolorem
              rerum nihil! Repellat molestias earum corrupti. Delectus dicta
              molestias corrupti, accusantium maxime recusandae laudantium
              aliquam, nostrum, aliquid perspiciatis ea porro veniam cupiditate
              perferendis dolorem. Illum saepe maxime vel, quae, soluta quia
              obcaecati eligendi perspiciatis, magnam exercitationem consequatur
              eaque impedit voluptas veritatis tempora? Laborum odit, dolorem
              inventore debitis ducimus molestias qui aut soluta libero dolores
              quae animi consectetur facilis obcaecati perferendis doloremque
              nulla. Vitae ducimus possimus nemo.
            </p>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => (modalRef.current.style.display = "none")}
          >
            hide
          </button>
        </div>

        <button
          className="btn btn-success"
          onClick={() => (modalRef.current.style.display = "block")}
        >
          show
        </button>
      </div>
    </>
  );
};

export default Modal;
