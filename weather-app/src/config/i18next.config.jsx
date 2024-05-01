import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Establece el idioma predeterminado en inglés
    debug: true,
    interpolation: {
      escapeValue: false, // No necesitas escapar las cadenas traducidas
    },
    react: {
      wait: true, // Hace que React esperes a que i18n esté listo antes de renderizar
    },
  });

export default i18n;
