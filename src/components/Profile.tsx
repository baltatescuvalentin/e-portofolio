import ProfileImg from '../utils/Images/profile.jpg';

function Profile() {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex items-center justify-center left-[50%] h-[400px] w-[400px] sm:h-[300px] sm:w-[300px] shadow-sm rounded-full border-2 border-grey-300 mt-[32px]">
                <div className="flex items-center justify-center h-[380px] w-[380px] sm:h-[280px] sm:w-[280px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-full ">
                    <img className="h-[380px] w-[380px] sm:h-[280px] sm:w-[280px] rounded-full border-2 border-white" src={ProfileImg} alt="Profile" />
                </div>
            </div>
        </div>
    )
}

export default Profile;