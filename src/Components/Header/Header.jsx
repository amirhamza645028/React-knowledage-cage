import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between p-4 items-center mx-4 border-b-slate-700'>
            <h1 className="text-3xl font-bold ">
               Knowladge cafe
            </h1>
                <img src={profile} alt="" />
        </div>
    );
};

export default Header;