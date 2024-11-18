'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const ContactPage = () => {
  const t = useTranslations('Contact');  // Access the translations using the 'Contact' namespace
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError(t('error.emptyFields'));  // Use the translation for error
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(t('error.invalidEmail'));  // Use the translation for invalid email
      return;
    }

    setIsSubmitted(true);
    setError('');
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16 px-6 lg:px-12">
        {/* Left Side: Text & Contact Details */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">{t('header')}</h2> 
          <p className="text-gray-600">{t('description')}</p> 
          <ul className="space-y-3">
            <li className="flex items-center space-x-4">
              <span className="text-xl">📞</span>
              <a href="tel:+1234567890" className="text-gray-700 hover:text-blue-600">
                +1 234 567 890
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-xl">✉️</span>
              <a href="mailto:info@example.com" className="text-gray-700 hover:text-blue-600">
                info@example.com
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-xl">📍</span>
              <p className="text-gray-700">{t('address')}</p> 
            </li>
          </ul>
        </div>
  
        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 flex-shrink-0 bg-white shadow-lg rounded-lg p-8 transition-all duration-500 ease-in-out">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-gray-600 font-semibold">
                  {t('form.nameLabel')}  
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('form.namePlaceholder')}  
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>
  
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-gray-600 font-semibold">
                  {t('form.emailLabel')}  
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('form.emailPlaceholder')}  
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>
  
              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-gray-600 font-semibold">
                  {t('form.subjectLabel')}  
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('form.subjectPlaceholder')}  
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>
  
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-gray-600 font-semibold">
                  {t('form.messageLabel')}  
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('form.messagePlaceholder')}  
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  rows={5}
                />
              </div>
  
              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg transition duration-300 hover:opacity-90"
              >
                {t('form.submitButton')}  
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600">
                {t('form.thankYou')}  
              </h3>
              <p className="text-gray-500 mt-4">
                {t('form.receivedMessage')}  
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
