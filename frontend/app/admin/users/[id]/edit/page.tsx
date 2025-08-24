'use client';

import AdminLayout from "../../../layout";
import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import ProfilePictureUpload from '../../components/ProfilePictureUpload';

const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Admin',
  profilePic: null,
};

export default function EditUser({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    role: mockUser.role,
    password: '',
  });
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        submitData.append(key, value);
      }
    });
    if (profilePicture) {
      submitData.append('profilePicture', profilePicture);
    }

    console.log('Form submitted:', Object.fromEntries(submitData));
    alert('User updated successfully!');
    router.push('/admin/users');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfilePictureChange = (file: File) => {
    setProfilePicture(file);
  };

  return (
    <div className="p-6 mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Edit User</h1>
        <button
          onClick={() => router.push('/admin/users')}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
        >
          Back to Users
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
  <div className="text-center mb-6">
    <ProfilePictureUpload
      name={formData.name}
      currentImage={mockUser.profilePic}
      onImageChange={handleProfilePictureChange}
    />
  </div>

  {/* Grid container for inputs */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
    <div className="md:col-span-6">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <div className="md:col-span-6">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <div className="md:col-span-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Leave blank to keep current password"
      />
      <p className="text-xs text-red-500 mt-1">Optional: Enter a new password to reset</p>
    </div>

    <div className="md:col-span-6">
      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
        Role <span className="text-red-500">*</span>
      </label>
      <select
        id="role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>
    </div>
  </div>

  <div className="flex justify-center space-x-3 pt-4 pt-6">
    <button
      type="button"
      onClick={() => router.push('/admin/users')}
      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Update User
    </button>
  </div>
</form>

    </div>
  );
}
