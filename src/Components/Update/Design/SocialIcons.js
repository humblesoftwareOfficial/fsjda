import React from "react";

export default function SocialIcons({ mobile = false }) {
  const links = [
    {
      className: "facebook",
      link: "https://web.facebook.com/fsjda/",
      icone: "fa fa-facebook",
    },
    {
      className: "twitter",
      link: "https://www.twitter.com/judo_senegal/",
      icone: "fa fa-twitter",
    },
    {
      className: "youtube",
      link: "https://www.youtube.com/channel/UCFjErv89WmzldnOLhsbEaig",
      icone: "fa fa-youtube",
    },
  ];

  const renderSocialLinks = () =>
    links.map((option, index) => (
      <li>
        <a
          style={{
            width: mobile ? "6vw" : "44px",
            height: mobile ? "6vw" : "44px",
            fontSize: mobile ? "3vw" :  "16px",
            lineHeight: mobile ? "6vw" : "44px",
          }}
          className={option.className}
          href={option.link}
          target="blank"
        >
          <i className={option.icone}></i>
        </a>
      </li>
    ));
  return (
    <ul className="social-icons">
      {renderSocialLinks()}
    </ul>
  );
}
