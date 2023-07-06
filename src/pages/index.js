import Link from "next/link"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Sign Up Page</h1>
        <Link legacyBehavior href="/signup">
          <a className="text-primary hover:underline">Sign Up</a>
        </Link>
        <br />
        <Link legacyBehavior href="/signin">
          <a className="text-primary hover:underline">Sign In</a>
        </Link>
      </div>
    </div>
  )
}
