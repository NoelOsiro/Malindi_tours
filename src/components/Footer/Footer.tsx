import React from 'react';

// Define TypeScript interfaces for the footer links
interface FooterLink {
  title: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections: FooterSection[];
}

// Footer component
const Footer: React.FC<FooterProps> = ({ sections }) => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          {sections.map((section, index) => (
            <div key={index} className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">{section.title}</p>
              <ul className="list-reset mb-6">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href={link.url} className="no-underline hover:underline text-gray-800 hover:text-pink-500">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
