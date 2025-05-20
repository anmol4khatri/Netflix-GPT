import { Netflix_Logo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const Header = () => {

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="absolute top-0 left-0 w-full flex justify-between z-15">
            <div className="top-0 left-0 z-10 from-black flex gap-8">
                <img className="w-50 max-sm:w-30 max-sm:m-3" src={Netflix_Logo} alt="logo" />
                <div className="flex gap-8 mt-7 mb-7 text-lg font-semibold text-white">
                    <h3 className="cursor-pointer hover:border-b-2">Home</h3>
                    <h3 className="cursor-pointer hover:border-b-2">Movies</h3>
                    <h3 className="cursor-pointer hover:border-b-2">TV Shows</h3>
                    <h3 className="cursor-pointer hover:border-b-2">Latest</h3>
                </div>
            </div>
            <div className="m-6 text-white flex gap-5">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABb0lEQVR4nO2VO05CQRiFr5hoIVr52AMsAqQ2iqJxCUQLtDGEWCmVj3UYOwkuw4iv1hAW4BMNsVA/M8kh3gYchrmFyT3JVPf7zzlzXxMEsWL9NwGzQBW4At61GsA+MBN1+CrQprdegZUow78VdAZkgAmtLFDTtS9gOYrb3lbATh+uLOYFmPZZoNrduQVbF7vns8C1TDMW7LzYhs8CbzJNWrCTYts+CzwPUGBK7JPPApcyzVqwObEXPgvsyrRmwZ6LrfgsMAc8yrjch6uIeTCfrrcCRubnAnwqoK63PamVC+3cMPkgCgEF/el6yVwrRBW+CNzztwyz4DN4BDgKBdwAJSAVOgvSwBZwK8acGQdm1keBY5l+AEUg0YdNABtijQ6HDc+HwjMDzGVDJZZcw8eBlkyKDvObmm0CYy4F1kPPPOEwPwrcyWPNpcCphksDD/96bMvjxGW4qeHUEAXS3U/TZbhjewJaHM0dV49YsYKo9QOixZ4KLtJpYwAAAABJRU5ErkJggg==" alt="gender-neutral-user"
                    className="cursor-pointer"></img>
                <h4 className="font-semibold mr-2 mt-1.5 cursor-pointer hover:border-b-2" onClick={handleLogout}>Logout</h4>
            </div>
        </div>
    );
};

export default Header;