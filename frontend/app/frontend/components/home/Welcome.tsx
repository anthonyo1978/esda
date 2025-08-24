'use client';
const Welcome: React.FC = () => {
  return (
    <section className="welcome pt-32 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-between ">
        {/* Image Section */}
        <div className="w-full md:w-1/3 pic bg-white rounded-full p-16 shadow-sm">
          <img
            src="/images/years.svg"
            alt="Digital Solutions"
            className="w-full h-auto "
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left pl-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Delivering digital solutions to make businesses Agile, Scalable and Efficient
          </h2>
          <p className="text-lg ">
            F9 Info Technologies is a Global Digital Solutions Company that helps businesses ensure their success by harnessing the power of technology. We offer customised mobile app and web development services, we have strong expertise in design, digital marketing and web services. Our end-to-end services, from creating a design concept and planning the product development right through to launching the software, we ensure that our clients are always successful. We are proud to have delivered experience along with technology to over 1000 clients across the globe.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Welcome;