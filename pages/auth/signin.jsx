import { getProviders,signIn as SignIntoProvider } from 'next-auth/react' ;
import Header from '../../components/Header';
import Image from 'next/image';

export default function SignIn({providers}) {
  
  return (
    <>
     <Header/>
      
      <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-28 px-14  text-center'>
    
        <img
          src="https://links.papareact.com/ocw"
          className='w-80'
          />
          <p className='font-xs italic'>This is not a REAL app, it is build for educational purposes only</p>

        <div className='mt-40'>
          {Object.values(providers).map(provider=>(
            <div key={provider.name}>
              <button className='p-3 bg-blue-400  rounded-lg text-white' onClick={()=>SignIntoProvider(provider.id,{callbackUrl:'/'})}>
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps(){
  const providers = await getProviders()

  return {
    props:{
      providers
    }
  }
}