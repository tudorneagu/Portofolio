import Button from "../components/ui/Buttons/Button";
import Hero from "../components/Hero";

function Contact() {
  return (
    <section className="flex w-full bg-bg-light items-center justify-center gap-52 px-20">
      <article className="max-w-80  flex flex-col gap-5">
        <img className=" rounded-3xl" src="/tudor.jpg" alt="Image of Tudor" />
        <div className="flex flex-col gap-4">
          <h1 className="heading-m"> Let's Work Together !</h1>
          <p className="text-l-regular">I'm looking foward to your message</p>
        </div>
      </article>
      <form className="flex flex-col gap-8 min-w-[400px]  ">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-m-bold">First Name</label>
            <input
              type="text"
              className="border border-light focus:outline-medium rounded-md px-2 py-1 text-m-regular text-medium"
              placeholder="Your First Name"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-m-bold">Last Name</label>
            <input
              type="text"
              className="border border-light focus:outline-medium  rounded-md px-2 py-1 text-m-regular text-medium"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-m-bold">Email</label>
            <input
              type="email"
              className="border border-light focus:outline-medium rounded-md px-2 py-1 text-m-regular text-medium"
              placeholder="nicole.martin@mail.fr"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-m-bold">Message</label>
          <textarea
            rows={10}
            className="border border-light focus:outline-medium  rounded-md p-2 text-m-regular text-medium"
            placeholder="Your message"
            required
          />
        </div>
        <Button content="Send Message" type="submit" />
      </form>
    </section>
  );
}

export default Contact;
