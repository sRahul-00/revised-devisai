const Feature = ({ img, header, text }) => {
  console.log(img, header, text);

  return (
    <div className="md:w-10/12 flex-col md:flex-row flex gap-10 my-5 items-center justify-center">
      <div className="md:w-4/12">
        <img src={img} alt="" className="md:w-48 w-60" />
      </div>

      <div className="md:w-4/6 flex flex-col gap-5 leading-7">
        <h1 className="md:text-2xl text-3xl font-bold mt-8">{header}</h1>
        <p className="md:leading-8 leading-9 text-lg dark:text-gray-400 text-gray-600 font-semibold">
          {text}
        </p>
      </div>
    </div>
  );
};
export default Feature;
