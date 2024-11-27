import axiosInstance from '../common/axiosInstance';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { useState, useEffect } from 'react';


interface UserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Profile = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null); // State for user data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error('User not authenticated.');
        }
  
        const response = await axiosInstance.get('/api/users/user-info', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        setUserInfo(response.data);
      } catch (err: any) {
        const message =
          err.response?.data?.message || err.message || 'Failed to fetch user info';
        setError(message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserInfo();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>; // Loading state
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>; // Error state
  }

  return (
    <>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {userInfo?.name || 'Name not available'}
            </h3>
            <p className="font-medium text-gray-500 dark:text-gray-300">
              {userInfo?.email || 'Email not available'}
            </p>

            <div className="mx-auto max-w-180 mt-6">
              <h4 className="font-semibold text-black dark:text-white">
                Phone: {userInfo?.phone || 'Phone not available'}
              </h4>
              <p className="mt-4.5 text-gray-500 dark:text-gray-300">
                Address: {userInfo?.address || 'Address not available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
