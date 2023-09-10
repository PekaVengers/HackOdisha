import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader/Loader";
import badge1 from "../assets/badge1.png"
import badge2 from "../assets/badge2.png"
import badge3 from "../assets/badge3.jpg"
import badge4 from "../assets/badge4.jpeg"
import { useState } from "react";
import backgroundImage from '../assets/profile-bg-image.jpeg';

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [badgesCount, setBadgesCount] = useState(0)

  if (isLoading || !isAuthenticated) {
    return <Loader />;
  }

  const badgeArr = [badge1, badge2, badge3, badge4]
  const badgesToShow = badgeArr.slice(0, badgesCount)

  function getBadges() {

  }

  return (
    <div className="flex justify-center mb-5 py-1">
      <div className="w-[30rem] md:w-[38rem] md:m-5 mt-10 p-4 border rounded-lg shadow-lg">
        <div className="w-full h-64 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="flex justify-center mt-[-5rem]">
          <img className="w-32 h-32 border-4 border-white rounded-full" src={user.picture} alt={user.name} />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>

        <div>
          <h2
            className="text-2xl font-semibold mb-4"
          >
            Badges
          </h2>
          {badgesCount > 0 ? (
            <div className="flex gap-3 flex-wrap">
              {badgesToShow.map((badgeSrc, index) => (
                <img
                  key={index}
                  src={badgeSrc}
                  alt={`Image ${index}`}
                  className="w-10 h-10 p-1 border-2 border-slate-500 rounded-full bg-slate-200"
                />
              ))}
            </div>
          ) : (
            <p>No badges to show</p>
          )}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
