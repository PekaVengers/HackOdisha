import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="bg-green-400 p-2 text-white rounded-lg">
      Log In
    </button>
  )
}