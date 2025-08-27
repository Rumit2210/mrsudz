// src/pages/Contact.jsx
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
// import heroImg from "../assets/contact/hero.jpg";

export default function Contact() {
  // Hook up your API here if you want
  const submitToApi = async (data) => {
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    console.log("Contact form data:", data);
  };

  return (
    <div className="min-h-screen">
      <div className="container-responsive py-8 sm:py-12 lg:py-16">
        <ContactHero /* heroImg={heroImg} */ />
      </div>

      <ContactForm onSubmit={submitToApi} />
    </div>
  );
}
