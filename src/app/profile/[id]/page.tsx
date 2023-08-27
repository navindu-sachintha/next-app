export default function userProfile({params}:any) {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-semibold">Profile</h1>
      <hr />
      <p>Profile Page {params.id}</p>
    </div>
  )
}
