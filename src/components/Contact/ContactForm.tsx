import React from 'react';
import { Loader2 } from 'lucide-react';
import { FormData, SubmitStatus } from './types';

interface ContactFormProps {
  formData: FormData;
  isSubmitting: boolean;
  submitStatus: SubmitStatus;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  isSubmitting,
  submitStatus,
  onSubmit,
  onChange,
}) => (
  <form onSubmit={onSubmit} className="space-y-4">
    {submitStatus.type && (
      <div
        className={`p-4 rounded-lg ${
          submitStatus.type === 'success'
            ? 'bg-green-50 text-green-800'
            : 'bg-red-50 text-red-800'
        }`}
      >
        {submitStatus.message}
      </div>
    )}
    
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={onChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={onChange}
        required
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="animate-spin mr-2" size={20} />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </button>
  </form>
);

export default ContactForm;