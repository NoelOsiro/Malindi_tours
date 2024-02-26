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


const footerSections: FooterSection[] = [
  {
    title: 'Links',
    links: [
      { title: 'FAQ', url: '#' },
      { title: 'Help', url: '#' },
      { title: 'Support', url: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Terms', url: '#' },
      { title: 'Privacy', url: '#' },
    ],
  },
  {
    title: 'Social',
    links: [
      { title: 'Facebook', url: '#' },
      { title: 'Linkedin', url: '#' },
      { title: 'Twitter', url: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Official Blog', url: '#' },
      { title: 'About Us', url: '#' },
      { title: 'Contact', url: '#' },
    ],
  },
];
// Footer component
const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          {footerSections.map((section, index) => (
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
