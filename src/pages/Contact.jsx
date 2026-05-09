import { useState } from "react"
import { toast } from "react-toastify"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    toast.success("Message sent (demo)!")
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Contact us</h1>
        <p className="text-zinc-600">
          This is a demo contact form for your portfolio. It validates inputs and shows a toast, but
          doesn’t send emails yet.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Support</h2>
          <p className="mt-1 text-sm text-zinc-600">support@example.com</p>
          <h2 className="mt-4 font-semibold">Address</h2>
          <p className="mt-1 text-sm text-zinc-600">
            123 Studio Street, Design City
          </p>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
      >
        <div className="grid gap-4">
          <div>
            <label className="text-sm font-medium text-zinc-700">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:border-zinc-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-zinc-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:border-zinc-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-zinc-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="mt-1 w-full resize-none rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:border-zinc-400"
              placeholder="Tell us what you need…"
            />
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800">
            Send message
          </button>
        </div>
      </form>
    </div>
  )
}

