import { getProviders,signIn as SignIntoProvider } from 'next-auth/react' 


export default function SignIn({providers}) {
  
  return (
    <div>
      {Object.values(providers).map(provider=>(
        <div key={provider.name}>
          <button onClick={()=>SignIntoProvider(provider.id)}>
            Sign In with {provider.name}
          </button>
        </div>
      ))}
    </div>
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