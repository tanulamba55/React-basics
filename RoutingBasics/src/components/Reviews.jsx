const Reviews = () => {
  return (
    <div className="m-5 text-center">
      <h2 className="text-3xl font-extrabold text-blue-600">
        Kindly Give Us Review!
      </h2>
      <textarea
        className="w-64 h-32 m-5 border-1 p-2"
        placeholder="Any Feedbacks..."
      ></textarea>
      <br />
      <button
        className="rounded-xl p-3 bg-blue-600
       text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default Reviews;
