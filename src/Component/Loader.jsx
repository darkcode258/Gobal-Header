import { ProgressBar } from "react-loader-spinner";

function Loader() {

  return (
    <div>




      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen z-50 bg-white">


        <ProgressBar
          visible={true}
          height="100vh"
          width="90"
          color="#000000"
          borderColor="#000000"
          barColor="#ffbc04"
          ariaLabel="Loading"
          wrapperStyle={{}}
          wrapperClass="d-flex justify-center items-center mx-auto "
        />

      </div>
    </div>
  );
}

export default Loader;
