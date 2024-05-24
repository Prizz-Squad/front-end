import { SignupForm } from "@/components/forms/signup";

export default function SignupPage() {
  return (
    <main className="flex items-center justify-center">
      <SignupForm
        onSubmit={async (data) => {
          console.log("data", data);
          // TODO: should we post to nextjs api or directly to the backend?
          const res = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify({
              ...data,
              username: "anxhelo", // TODO: this is hardcoded atm
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const json = await res.json();
          console.log("json", json);
          const { token } = json;
          localStorage.setItem("token", token); //TODO: do not store token in local storage
          console.log("token", token);
        }}
      />
    </main>
  );
}
