import MemeData from './data'
let url
export default function Main() {
  const clickHandlerFun = () => {
    console.log(MemeData)
    let memesArray = MemeData.data.memes
    let randomImage = Math.floor(Math.random() * memesArray.length)
    // for (let i=0; i<=lengthOfMeme; i++){
    console.log(randomImage)
    url = memesArray[randomImage].url
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
      <p>{url}</p>

    </div>
  )
}