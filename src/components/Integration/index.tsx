import { useEffect, useState } from "react";
import LOGO from "../../assets/Logo.svg";
import dropbox from "../../assets/logos/dropbox.svg";
import figma from "../../assets/logos/figma.svg";
import google_drive from "../../assets/logos/google_drive.svg";
import intercom from "../../assets/logos/intercom.svg";
import mailchimp from "../../assets/logos/mailchimp.svg";
import notion from "../../assets/logos/notion.svg";
import slack from "../../assets/logos/slack.svg";
import stripe from "../../assets/logos/stripe.svg";
import zapier from "../../assets/logos/zapier.svg";
import zendesk from "../../assets/logos/zendesk.svg";

const Integration = () => {
  const [screen, setScreen] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1025) {
        setScreen(width);
      } else {
        setScreen(0);
      }
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-16 xl:py-24">
      <div className="container">
        <div className="w-full flex flex-col text-center gap-3">
          <span className="text-sm lg:text-base font-bold text-gray-400 ">
            Integrations
          </span>
          <h2>Integrate Polio with over 500 apps</h2>
          <p className="text-lg lg:text-xl font-medium text-gray-400 md:max-w-[628px] mx-auto mt-2">
            Polio CRM works seamlessly with your favorite apps. User over 500
            tools and apps by just click.
          </p>
        </div>
      </div>
      <div className="container mt-16">
        <div className="w-full flex flex-col items-center justify-center gap-12">
          <img src={LOGO} alt="" className="h-20" />
          <div className="w-full relative flex items-center justify-between">
            <img src={notion} alt="" />
            <img src={stripe} alt="" />
            <img src={zendesk} alt="" />
            <img src={slack} alt="" />
            <img src={google_drive} alt="" />
            <img src={figma} alt="" />
            {screen >= 1024 && (
              <>
                <img src={zapier} alt="" />
                <img src={mailchimp} alt="" />
                <img src={intercom} alt="" />
                <img src={dropbox} alt="" />
              </>
            )}

            <div className="h-full w-[338px] top-0 left-0 absolute bg-gradient-to-r from-white to-white/0"></div>
            <div className="h-full w-[338px] top-0 right-0 absolute bg-gradient-to-r from-white/0 to-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
