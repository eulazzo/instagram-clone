import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHapyIcon,
  HeartIcon,
  PaperAirPlaneIcon
} from '@heroicons/react/outline'

export const Post = ({username,user_img,img,caption}) => {
   
  return (
    <div className='bg-white my-7 border rounded-sm'>
      <div className='flex items-center p-5'>
        <img className='rounded-full h-12 w-12 object-contain border p-1 mr-3' src={user_img} alt="" />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5'/>
      </div>

      <img src={img} className='object-cover w-full' alt="" />

      <div>
        <HeartIcon />
        <ChatIcon />
        <PaperAirPlaneIcon />
      </div>
      
    </div>
  )
}
