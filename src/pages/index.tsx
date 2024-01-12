import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";

// * TEST: Upload data to DB ✅

interface IForm {
  text: string;
}

export default function Home() {
  // <form>
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const onValid = async ({ text }: IForm) => {
    await addDoc(collection(db, "temp"), {
      text,
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="flex flex-col p-4 bg-red-200 space-y-2"
    >
      <input
        {...register("text", { required: "TEXT is required." })}
        type="text"
        className="border-2 border-blue-500"
      />
      <button className="border-2 border-white bg-blue-500 text-white hover:bg-blue-600 transition-colors">
        Submit
      </button>
      {errors.text ? <p>{errors.text.message}</p> : null}
    </form>
  );
}
