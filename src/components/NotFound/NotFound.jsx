import React from 'react'

export default function NotFound() {
  return (<>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-6xl font-bold mb-4">Not Found</h1>
        <p className="text-xl mb-8">This page doesn't exist.</p>
        <p className="text-lg">
        If this is a mistake, <a href="#" className="text-blue-500 hover:underline">let us know</a>, and we will try to fix it!
        </p>
    </div>
  </>
  )
}
