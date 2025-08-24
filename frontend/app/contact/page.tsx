'use client';

import React, { useState } from 'react';
import FrontendLayout from '../frontend/layout';
import LetDiscuss from '../frontend/components/home/LetDiscuss';

interface FormData {
  name: string;
  email: string;
  subject: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  description?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    subject: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Create a new form data object with the updated value
    const updatedFormData: FormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);

    // Create new errors object
    const newErrors: FormErrors = {
      ...errors,
      [name]: '' // Clear error for this field
    };

    // Validate the updated field
    if (name === 'name' && value.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }
    if (name === 'email' && !value.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (name === 'subject' && value.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters.';
    }
    if (name === 'description' && value.length < 10) {
      newErrors.description = 'Description must be at least 10 characters.';
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = { ...errors };
    let isValid = true;

    if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
      isValid = false;
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters.';
      isValid = false;
    }
    if (formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Here you would typically send the form data to your backend
      console.log(formData);
      alert('Thank you for your message! We will get back to you soon.');
    }
  };

  return (
    <FrontendLayout>
      <div className="bg-[#eff0fa] py-12 px-4 pb-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600">
              We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your Subject"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your message..."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LetDiscuss />
    </FrontendLayout>
  );
}
