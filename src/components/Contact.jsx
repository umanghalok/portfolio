import React from "react";

//function for form reset
function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-blue-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 pt-10 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-pink-500">
            Contact
          </p>
          <p className="py-6">Get in touch with me.</p>
        </div>
        
        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://api.web3forms.com/submit"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="hidden" 
              name="access_key" 
              value="8e615dfe-e994-411c-84b4-1af5a8381ccc"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
