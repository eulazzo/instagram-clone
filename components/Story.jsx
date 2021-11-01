
const Story = ({img,username}) =>{

  return (
    <div >
      <img  className='h-14 w-14 rounded-full p-[1.5px] hover:scale-110 
      ease-out transition transform duration-200 border-2 border-red-500 
       object-contain cursor-pointer ' src={img} alt="profile" />
      <p className='text-xs w-14 
      truncate text-center  '>{username}</p>
    </div>
  )
}

export default Story