import Guest from "@/components/account/guest";
import { LoggedUser } from "@/components/account/logged-user";
import { getServerSupabase } from "@/lib/serverSupabase";

const AccountPage = async () => {
  const supabase = getServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-11/12 mx-auto">
      {!user && <Guest />}
      {user && <LoggedUser user={user} />}
    </div>
  );
};

export default AccountPage;
