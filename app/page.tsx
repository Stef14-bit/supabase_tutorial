import AuthForm from "./auth-form";

export default function Home() {
  return (
    <div className="flex flex-col  h-full align-middle content-center">
      <div className="col-6">
        <h1 className="header">Supabase Auth + Storage</h1>
        <p className="">
          Experience our Auth and Storage through a simple profile management
          example. Create a user profile and upload an avatar image. Fast,
          simple, secure.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  );
}
