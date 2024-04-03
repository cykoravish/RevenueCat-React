import React from 'react'

export default function Card(prop) {
  return (
    <div className="w-full px-8 cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
         {prop.cardsData.map((elem) => (
          <div
            key={elem.id}
            className="card rounded-lg overflow-hidden border-2 border-gray-300"
          >
            <img src={elem.img} className="w-full object-cover" />
            <button
              className={`border-2 border-${elem.btnColor}-500 rounded-full px-4 my-3 text-${elem.btnColor}-500 font-semibold hover:bg-${elem.btnColor}-500 hover:text-white ml-3`}
            >
              {elem.btnName}
            </button>
            <h1 className="ml-3 font-bold text-xl">{elem.title}</h1>
            <p className="ml-3 text-lg">{elem.description}</p>
            <div className="ml-3 flex gap-4 items-center h-24">
              <img src={elem.avatar} className="w-8" />
              <div>
                <h2 className="font-semibold">{elem.name}</h2>
                <p className="text-sm">{elem.Date}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
