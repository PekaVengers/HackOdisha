import { useAuth0 } from "@auth0/auth0-react";
export default function Profile() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex mb-[10rem]">
      <div className="col-1 max-w-[26.9375rem] max-h-[54rem] ml-[17.5rem] mt-[5.1875rem] mr-[2.875rem]">
        <>
          <div className="profile h-[14.375rem] w-[14.375rem] rounded-full flex justify-center items-center mb-[4.25rem] mx-[6.25rem]">
            <img className="rounded-full h-[12.5rem] w-[12.5rem]" src={user.picture} alt="" />
          </div>
          <div className="info">
            <div className="name bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
              <span className="font-bold">Name:</span> {user.name}
            </div>
            <div className="email bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
              <span className="font-bold">Email:</span> {user.email}
            </div>
          </div>
        </>
      </div>
    </div>
  )
}