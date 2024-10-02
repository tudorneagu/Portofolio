import Button from "../components/ui/Buttons/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    fromFirstName: "",
    fromLastName: "",
    fromEmail: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    const templateParams = {
      from_first_name: formData.fromFirstName,
      from_last_name: formData.fromLastName,
      from_email: formData.fromEmail,
      message: formData.message,
    };
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_ofooa6q",
        "portofolio_template",
        templateParams!,
        "ZopuUuvhXuBw-wEhC"
      );
      console.log("Succeess!", result.text);
      console.log(templateParams);
    } catch (error) {
      console.log("FAILED...", (error as Error).message);
    }
  };

  return (
    <section className="flex w-full bg-bg-light items-center justify-center gap-52 px-20">
      <article className="max-w-80  flex flex-col gap-5">
        <img className=" rounded-3xl" src="/tudor.jpg" alt="Image of Tudor" />
        <div className="flex flex-col gap-4">
          <h1 className="heading-m"> Let's Work Together !</h1>
          <p className="text-l-regular">I'm looking foward to your message</p>
        </div>
      </article>
      <form className="flex flex-col gap-8 min-w-[400px]" onSubmit={sendEmail}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-m-bold">First Name</label>
            <input
              type="text"
              className="border border-light focus:outline-medium rounded-md px-2 py-1 text-m-regular text-medium"
              placeholder="Your First Name"
              name="fromFirstName"
              value={formData.fromFirstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-m-bold">Last Name</label>
            <input
              type="text"
              className="border border-light focus:outline-medium  rounded-md px-2 py-1 text-m-regular text-medium"
              placeholder="Your Name"
              name="fromLastName"
              value={formData.fromLastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-m-bold">Email</label>
            <input
              type="email"
              className="border border-light focus:outline-medium rounded-md px-2 py-1 text-m-regular text-medium"
              placeholder="nicole.martin@mail.fr"
              name="fromEmail"
              value={formData.fromEmail}
              onChange={handleChange}
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button content="Send Message" type="submit" value="send" />
      </form>
    </section>
  );
}

export default Contact;
