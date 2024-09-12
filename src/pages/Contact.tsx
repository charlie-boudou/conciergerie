import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ContactForm } from "../components/contact/ContactForm";
import { Button } from "../components/Button";


function Contact(): JSX.Element {
  const { t } = useTranslation();

  const [isMessageSend, setIsMessageSend] = useState<boolean>(false);
  
    return (
        <div 
          className="w-full h-screen overflow-y-scroll flex flex-col items-center space-y-[2rem] pb-[2rem]"
        >
            <div className="w-[90%] rounded-[.5rem] md:h-screen bg-white/90 flex flex-col items-center justify-center p-[1rem]">
                <div 
                    className="text-orange font-bold text-[3rem] text-center pb-[2rem]"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                    {!isMessageSend ? (
                        <>
                            <p>{t('haveQuestion')}</p>
                            <p>{t('answer')}</p>
                        </>
                    ):(
                        <p>{t('successfullSent')}</p>
                    )}
                </div>
                {!isMessageSend ? (
                    <ContactForm setIsMessageSend={setIsMessageSend} />
                ):(
                    <div className="w-full flex items-center justify-center">
                        <Button title={t('sendNew')} setIsMessageSend={setIsMessageSend} />
                    </div>
                )}
            </div>
        </div>
      );
}

export { Contact };