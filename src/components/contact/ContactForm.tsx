import React, { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import { Loader } from "../../assets/svgComponents";

interface IContactFormProps {
    setIsMessageSend: Dispatch<SetStateAction<boolean>>;
}

function ContactForm({ setIsMessageSend }: IContactFormProps): JSX.Element {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    phone: '',
    email: '',
    message: ''
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs.send("service_r7qghmq","template_4ulre5g",{
        to_name: "Bénedicte",
        from_name: formData.name,
        message: formData.message,
        reply_to: formData.email,
    }, 'dSyIX4iEGfCy9Wbq2')
    .then(() => {
        setIsMessageSend(true);
        setIsLoading(false);
        setFormData({
            name: '',
            firstname: '',
            phone: '',
            email: '',
            message: ''
        });
    })
    .catch((error) => {
        console.log('Erreur lors de l\'envoi de l\'email:', error.text);
    });
};

  
    return (
        <form onSubmit={handleSubmit} className="w-full px-[1rem] text-[1.5rem] form flex flex-col space-y-[1rem] w-[70%] m-auto">
            <div className="flex flex-col md:flex-row items-center md:space-x-[1rem]">
                <div className="flex flex-col space-y-[.2rem] w-full">
                    <label htmlFor="name">{t('name')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-[.5rem] border-orange border px-[.5rem]"
                    />
                </div>
                <div className="flex flex-col space-y-[.2rem] w-full">
                    <label htmlFor="firstname">{t('firstName')}</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                        className="rounded-[.5rem] border-orange border px-[.5rem]"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:space-x-[1rem]">
                <div className="flex flex-col space-y-[.2rem] w-full">
                    <label htmlFor="phone">{t('phone')}</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="rounded-[.5rem] border-orange border px-[.5rem]"
                    />
                </div>
                <div className="flex flex-col space-y-[.2rem] w-full">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-[.5rem] border-orange border px-[.5rem]"
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-[.2rem] w-full">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="rounded-[.5rem] h-[15rem] border-orange border px-[.5rem]"
                />
            </div>
            <div className="w-full flex items-center justify-center pt-[2rem]">
                <button 
                    type="submit" 
                    className="rounded-[.5rem] py-[.5rem] px-[5rem] font-bold bg-orange text-white w-fit cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                    {isLoading ? (
                        <Loader className="fill-white animate-spin w-[2rem]" />
                    ):(
                        <>
                            {t('send')}
                        </>
                    )}
                </button>
            </div>
        </form>
      );
}

export { ContactForm };