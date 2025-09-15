import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com"




export const Contact = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

   try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Enzo Feltrin'
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log('Sucesso:', result);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('Erro detalhado:', error);
    setStatus('error');
  } finally {
    setIsLoading(false);
  }
};
  
  return (
    <>
      <section id="contato" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white text-black">
       <div className="w-3/4 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}   
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} 
          className="text-2xl font-semibold mb-8">
          {t("contact-me")}
          </motion.h2>

         <motion.form 
          initial={{ opacity: 0, y: 50 }}   
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-md space-y-6"
          onSubmit={handleSubmit}>

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm font-medium">{t("name")}</label>
                  <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('name')}
                  required
                  className="px-4 py-2 rounded-md border border-gray-300 bg-[#f6f2e9] focus:outline-none focus:ring-2 focus:ring-black"
                  />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">E-mail</label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('your_email')}
                  required
                  className="px-4 py-2 rounded-md border border-gray-300 bg-[#f6f2e9] focus:outline-none focus:ring-2 focus:ring-black"
                  />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 text-sm font-medium">{t("message")}</label>
                  <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder={t("message_form")}
                  required
                  className="px-4 py-2 rounded-md border border-gray-300 bg-[#f6f2e9] resize-none focus:outline-none focus:ring-2 focus:ring-black"
                  ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-black ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-black hover:bg-gray-800 cursor-pointer'
                   } text-white`}
                 >
              {isLoading ? 'Enviando...' : t("send")}
            </button>

            {status === 'success' && (
              <div className="text-green-600 text-center font-medium">
                Mensagem enviada com sucesso!
              </div>
            )}

            {status === 'error' && (
              <div className="text-red-600 text-center font-medium">
                Erro ao enviar mensagem. Tente novamente.
              </div>
            )}

          </motion.form>
          <motion.p
              initial={{ opacity: 0, x: 50 }}   
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }} 
              className="mt-12 text-center font-medium">
            {t("thanks")}
            </motion.p>
        </div>  
      </section>
      <Footer />
       </>
    );
  }
  