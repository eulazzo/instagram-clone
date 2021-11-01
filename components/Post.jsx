import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHapyIcon,
  HeartIcon,
  PaperAirplaneIcon
} from '@heroicons/react/outline'

import {HeartIcon as HeartIconFilled} from '@heroicons/react/solid'

export const Post = ({username,user_img,img,caption}) => {
   
  return (
    <div className='bg-white my-7 border rounded-sm'>
      <div className='flex items-center p-5'>
        <img className='rounded-full h-12 w-12 object-contain border p-1 mr-3' src={user_img} alt="" />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5'/>
      </div>

      <img src={img} className='object-cover w-full' alt="" />

      <div className='flex justify-between px-4 pt-4'>
        <div className='flex items-center space-x-4'>
          <HeartIcon className='btnIcons'/>
          <ChatIcon className='btnIcons' />
          <PaperAirplaneIcon  className='btnIcons'/>
        </div>
        <BookmarkIcon className='btnIcons' />
      </div>
      
    </div>
  )
}
