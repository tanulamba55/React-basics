const Contact = () => (
  <div className="m-5 text-center">
    <h2 className="text-3xl font-extrabold text-blue-600">Contact Us Page</h2>
    <p className="mt-4 text-lg text-gray-700">
      Have questions? Reach out to us through email at{" "}
      <a
        href="mailto:contact@ourwebsite.com"
        className="text-blue-500 underline"
      >
        contact@ourwebsite.com
      </a>{" "}
      or call us at <span className="font-semibold">9990999990</span>.
    </p>
  </div>
);

export default Contact;
