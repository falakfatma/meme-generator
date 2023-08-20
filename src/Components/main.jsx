import React from 'react'
import MemeData from './data'
// let url
export default function Main() {
    let memesArray = MemeData.data.memes
    let randomImage = Math.floor(Math.random() * memesArray.length)//Number Random
    const [memeImage, setMemeImage] = React.useState("")
    // console.log(MemeData)
    // console.log(randomImage)
    console.log(memeImage + "Random url")
  
  const clickHandlerFun = () => {
    setMemeImage(memesArray[randomImage].url)
    // for (let i=0; i<=lengthOfMeme; i++){
    // url = memesArray[randomImage].url
    // console.log(randomImage + "Random num")

    // }
  }

  return (
    <div className='py-16 w-10/12 m-auto'>
      <div className="py-5 flex justify-center ">
        <input className='border-2 border-slate-300 p-2 px-4 rounded mx-4' />
        <input className='border-2 border-slate-300 p-2 px-4 rounded mx-4' />
      </div>
      <button onClick={clickHandlerFun} className='text-center bg-purple-800 w-full p-3 text-xl font-bold rounded text-white'>
        Get a new meme image
      </button>
      <img className='m-auto mt-6' src={memeImage}>
      </img>
      {/* <p>{memeImage}</p> */}

    </div>
  )
}