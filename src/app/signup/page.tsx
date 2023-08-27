"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email:"",
    password:"",
    username:"",
  });

  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-semibold text-4xl">Signup</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"/>

      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"/>
      
      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"/>
      
      <button
        onClick={onSignup}
       className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600 hover:bg-violet-600">Sign Up</button>
      <Link href="/login">Already Have a account? Login here</Link>
    </div>
  );
}