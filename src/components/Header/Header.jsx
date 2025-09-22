import picture from '../../assets/profile.png'


const Header = () => {
    return (
        <>
            <div className='md:flex justify-between items-center m-2 p-2 border-b-2'>
                <h1 className='text-4xl font-bold'>knowledge Cafe</h1>
                <img src={picture} alt="" />
            </div>
        </>
    );
};
export default Header;