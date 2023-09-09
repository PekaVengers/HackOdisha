import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-[30rem] md:w-full md:m-5 mt-10 p-6 border rounded-lg shadow-lg">
        <div className="w-full h-64 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url('https://source.unsplash.com/9wg5jCEPBsw')` }}></div>
        <div className="flex justify-center mt-[-5rem]">
          <img className="w-32 h-32 border-4 border-white rounded-full" src={user.picture} alt={user.name} />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
