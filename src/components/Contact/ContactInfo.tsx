import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactInfoItem } from './types';

const contactItems: ContactInfoItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
  },
];

const ContactInfo: React.FC = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
    {contactItems.map((item, index) => (
      <div key={index} className="flex items-center space-x-4">
        <item.icon className="text-indigo-600" size={24} />
        <div>
          <p className="font-medium">{item.label}</p>
          {item.href ? (
            <a href={item.href} className="text-gray-600 hover:text-indigo-600">
              {item.value}
            </a>
          ) : (
            <p className="text-gray-600">{item.value}</p>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default ContactInfo;