import { Instagram, Linkedin, PhoneCall, Twitter, Mail } from "lucide-react";

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-10xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Have a project or want to collaborate ? I'm always open to discussing
          new opportunities
        </p>
        <h3 className="text-5xl font-semibold mb-6">Con<span className="text-primary">tact</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-8">
            <div className="space-y-6 justify-center">
              <div className="flex justify-center items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:test@gmail.com"
                className="  hover:text-primary transition-colors"
              >
                test@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-6 justify-center">
            <div className="flex justify-center items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <PhoneCall className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h4 className="font-medium">Phone Number</h4>
            <a
              href="tel:+123456789"
              className=" hover:text-primary transition-colors"
            >
              +1(123)-456-7890
            </a>
          </div>
          <div className="pt-8">
            <h4 className="font-semibold mb-4">Contact With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="#" target="_blank">
                <Linkedin />
              </a>
              <a href="#" target="_blank">
                <Twitter />
              </a>
              <a href="#" target="_blank">
                <Instagram />
              </a>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="" className="space-y-6">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Your Email</label>
                <input
                  type="email"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Your Message</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="name"> Your Contact Number</label>
                <input
                  type="number"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <input
                  type="submit"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background rounded-full focus:outline-none focus:ring-2 focus:ring-primary  hover:shadow-md transition-shadow duration-300"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
