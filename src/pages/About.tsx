import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";


export const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <section id="sobre" className=" bg-white flex flex-col h-screen justify-between">
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}   
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mt-15 mb-25">
                    <h2 className="text-3xl ml-5 mr-5 font-bold text-gray-900 mb-6">
                        {t("a_little_information")}
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-10 mr-10 ml-10">
                        {t("about_me")}
                    </p>
                    <div className="flex justify-center gap-10 flex-wrap">
                      <Link to="/experience">
                        <a
                            href="#experiencia"
                            className="px-6 py-3 bg-black text-white font-medium rounded-md shadow hover:bg-gray-800 transition"
                        >
                            {t("look_my_experience")}
                        </a>
                      </Link>
                      <Link to="/contact">
                        <a
                            href="mailto:seuemail@exemplo.com"
                            className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-md shadow hover:bg-gray-200 transition"
                        >
                            {t("send_email")}
                        </a>
                      </Link>
                    </div>
                </motion.div>
                <Footer />
            </section>
        </>
    );
}
