"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !address.trim()) {
      setStatus("error");
      setErrorMsg("Vinsamlegast fylltu út alla reiti.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, address }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Eitthvað fór úrskeiðis.");
      }
      setStatus("success");
      setName("");
      setEmail("");
      setAddress("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Eitthvað fór úrskeiðis.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-green-200 rounded-3xl p-8 text-center shadow-lg">
        <h3 className="text-xl font-bold text-green-600 mb-2">Takk fyrir!</h3>
        <p className="text-muted">
          Við höfum samband innan skamms með bankaupplýsingum. Bókin fer í póst um leið og greiðsla berst.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-sky-100/60 space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1">
          Nafn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={submitting}
          className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50/40 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition disabled:opacity-60"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">
          Netfang
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
          className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50/40 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition disabled:opacity-60"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-foreground mb-1">
          Heimilisfang
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={submitting}
          placeholder="Gata, húsnúmer, póstnúmer, staður"
          className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50/40 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition disabled:opacity-60"
        />
      </div>

      {status === "error" && errorMsg && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-400 text-white font-bold text-lg rounded-full
                   hover:bg-green-500 hover:scale-[1.02] active:scale-[0.98]
                   transition-all duration-200 shadow-xl shadow-green-400/30
                   disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {submitting ? "Sendi..." : "Skrá mig"}
      </button>

      <p className="text-xs text-muted text-center">
        Við sendum aldrei ruslpóst. Upplýsingar eru eingöngu notaðar til að senda bókina.
      </p>
    </form>
  );
}
