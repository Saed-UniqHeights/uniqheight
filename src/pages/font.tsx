import React from 'react'

function font() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">
        Custom Fonts Showcase
      </h1>
      <h1 className="font-archivero text-3xl">Concert One (Archiero)</h1>
      <p className="font-christmas text-2xl">Rubik Dirt (Christmas)</p>
      <p className="font-little text-xl">Architects Daughter (Little)</p>
    </div>
  );
}

export default font