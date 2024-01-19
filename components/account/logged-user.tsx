import { UserCircleIcon } from "@heroicons/react/24/outline";
import LogoutButton from "@/components/forms/logout-button";
import { User } from "@supabase/supabase-js";

type Props = {
  user: User;
};

export const LoggedUser = ({ user }: Props) => {
  return (
    <>
      <div className="text-white mt-10 w-40 aspect-square mx-auto bg-secondary rounded-full flex items-center justify-center text-3xl">
        <UserCircleIcon className="w-20 h-20" />
      </div>
      <div className="mt-10">
        <h1 className="text-center font-bold text-xl">{user.email}</h1>
        <LogoutButton />
      </div>
    </>
  );
};
