import GithubBtn from './GithubBtn'

const NavBar = () => {
  return (
      <div className='flex justify-between my-10  items-center bg-white  py-4 px-4 rounded-xl shadow-2xs hover:shadow-md transition '>
          <div className='flex items-center'>
            {/* <Loader/> */}
           <p className='text-3xl tracking-tighter font-bold text-mist-800 '>Senor hitesh <span className='text-fuchsia-500'>.</span></p>
            </div>
          <GithubBtn/>
    </div>
  )
}

export default NavBar