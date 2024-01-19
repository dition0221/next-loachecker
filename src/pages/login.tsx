import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
// FIREBASE
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";

/* interface ICharacter {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: 0;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
}

interface ILoginProps {
  characters: ICharacter[];
} */

interface IForm {
  nickname: string;
}

export default function Login() {
  const router = useRouter();

  // Login with google account
  const [loginError, setLoginError] = useState("");
  const getLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (e) {
      console.log(e);
      if (e instanceof FirebaseError) setLoginError(e.message);
    }
  };

  // <form>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = () => {};

  return (
    <>
      <button
        onClick={getLogin}
        className="flex justify-center items-center space-x-2 bg-sky-200 w-80 py-3 rounded-3xl shadow-md text-base font-medium text-gray-800"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
        <span>Google Login</span>
      </button>
      {loginError ? (
        <p className="text-lg text-red-500 underline italic text-center">
          {loginError}
        </p>
      ) : null}

      <form onSubmit={handleSubmit(onValid)} className="flex flex-col">
        <input
          {...register("nickname", {
            maxLength: {
              value: 12,
              message: "캐릭터 닉네임은 12글자 내로 적어주세요.",
            },
          })}
          type="text"
        />
        <button>제출</button>
      </form>
    </>
  );
}

/* export async function getServerSideProps() {
  const characters = await (
    await fetch(
      "https://developer-lostark.game.onstove.com/characters/디택티드/siblings",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${process.env.LOSTARK_API_KEY}`,
        },
      }
    )
  ).json();

  return { props: { characters } };
}
 */
