
export default function Login() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 px-4 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Welcome
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to your account or create a new one.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Login */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900">Login</h2>
              <p className="mt-1 text-sm text-slate-600">
                Use your email and password to sign in.
              </p>
            </div>

            <form className="space-y-4" action="#" method="post">
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
                />
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900/20"
                  />
                  Remember me
                </label>

                <a
                  href="#"
                  className="text-sm font-medium text-slate-900 underline-offset-4 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
              >
                Sign in
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-2 text-xs text-slate-500">
                    OR
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                  G
                </span>
                Continue with Google
              </button>
            </form>
          </section>

          {/* Sign Up */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900">Sign up</h2>
              <p className="mt-1 text-sm text-slate-600">
                Create an account in less than a minute.
              </p>
            </div>

            <form className="space-y-4" action="#" method="post">
              <div>
                <label
                  htmlFor="signup-name"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Full name
                </label>
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
                />
              </div>

              <div>
                <label
                  htmlFor="signup-email"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="signup-password"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <input
                    id="signup-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signup-confirm"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Confirm
                  </label>
                  <input
                    id="signup-confirm"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="terms"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900/20"
                />
                <span>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-medium text-slate-900 underline-offset-4 hover:underline"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-slate-900 underline-offset-4 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
              >
                Create account
              </button>

              <p className="text-xs text-slate-500">
                By creating an account, you acknowledge our policies.
              </p>
            </form>
          </section>
        </div>

        <footer className="mx-auto mt-8 max-w-3xl text-center text-xs text-slate-500">
          Tip: If Tailwind styles don’t show up, ensure Tailwind is configured in
          your Next.js app (global CSS includes Tailwind directives).
        </footer>
      </div>
    </div>
  )
}