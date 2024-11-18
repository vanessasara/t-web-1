import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const Contact = () => {
  const t = useTranslations("contact"); // Using 'contact' namespace
  const locale = useLocale(); // Get the current locale

  // Generate a localized path
  const contactPath = `/${locale}/contact`;

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-gray-900 py-8 md:gap-16 px-6 md:px-10 relative z-10 rounded-3xl overflow-hidden bg-blue-600 text-center md:text-left">
          {/* Content */}
          <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-8 md:gap-16">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="font-serif text-white/95 text-2xl md:text-3xl lg:text-4xl">
                {t("heading")}
              </h2>
              <p className="text-sm md:text-base mt-2">{t("subheading")}</p>
            </div>

            {/* Button Section */}
            <div className="mt-6">
              <Link href={contactPath}>
                <button className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl transition-all duration-300">
                  <span className="font-semibold uppercase">
                    {t("buttonText")}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
