import React from "react";
import { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

function User() {
  const [username, setUsername] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
    const profile = await fetch(`https://api.github.com/users/usamabinkashif`);
    const profileJson = await profile.json();
    setUsername(profileJson);
    setLoading(false);
  };

  const userByName = async (e) => {
    e.preventDefault();
    setLoading(true);
    let input = document.getElementById("input");
    if (input.value) {
      const userName = await fetch(`https://api.github.com/users/${input.value}`);
      const userNameJson = await userName.json();
      setUsername(userNameJson);
      setLoading(false);
      
    }else{
      getUser()
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col  bg-gray-50 dark:bg-gray-900">
      {/* Search--Section */}
      <form className=" search sm:w-2/3 xl:w-1/2 p-5 rounded shadow gap-4 flex justify-center items-center bg-gray-300 dark:bg-gray-800">
        <FaSistrix className="icon text-blue-700 dark:text-blue-600 " />
        <input
          type="text"
          className="text-gray-800 dark:text-gray-100 text-xl w-full"
          placeholder="search github username"
          id="input"
        />
        <button
          onClick={userByName}
          className="bg-blue-700 dark:bg-blue-600 ml-auto text-gray-100 py-1 px-3 rounded shadow text-xl outline-none border-none hover:bg-blue-500 dark:hover:bg-blue-800 transition"
        >
          Search
        </button>
      </form>
      {/* Search--Section-End */}
      {/* Main--Section */}
      {loading ? (
        <div
          role="status"
          className="flex justify-center items-center h-screen"
        >
          <svg
            className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="main flex justify-center items-center gap-16 mt-10  bg-gray-300 dark:bg-gray-800 rounded p-14">
          <img
            src={username.avatar_url}
            alt="github user avatar"
            className="rounded-full w-44 mt-3"
          />
          {/* Main--Heading */}

          <div className="main__heading flex flex-col text-gray-800 dark:text-gray-100 font-semibold">
            <h1 className="text-2xl font-bold ">{username.name}</h1>
            <a
              className="text-blue-700 text-sm mt-1"
              href="https://github.com/UsamaBinKashif"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-xs">@</span>
              {username.login}
            </a>
            <p className="text-sm mt-5">
              {username.bio ? username.bio : "This user has no bio"}
            </p>

            {/* Main--Details */}
            <div className="main__details flex text-center gap-32 items-center justify-center mt-2 bg-gray-400 dark:bg-gray-900 py-4 px-10 font-medium ">
              <div>
                <p>Repos</p>
                <p className="font-extrabold">{username.public_repos}</p>
              </div>
              <div>
                <p>Followers</p>
                <p className="font-extrabold">{username.followers}</p>
              </div>
              <div>
                <p>Following</p>
                <p className="font-extrabold"> {username.following}</p>
              </div>
            </div>
            {/* Main--Details--End*/}

            {/* Main--Icons&Urls--Section */}
            <div className="main__IU flex text-sm font-bold mt-5 ">
              {/* Main--Icons&Urls column one */}
              <div className="main__IU--col flex flex-col gap-5 mr-10 ">
                <p className="flex">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>
                    {username.location
                      ? username.location
                      : "This user has no location"}
                  </span>
                </p>

                <p className="flex">
                  <AiOutlineLink className="mr-1" />
                  <a href={username.blog} target="_blank" rel="noreferrer">
                    {username.blog ? username.blog : "This user has no blog"}
                  </a>
                </p>
              </div>
              {/* Main--Icons&Urls column one end */}

              {/* Main--Icons&Urls column two */}
              <div className="main__IU--col flex flex-col gap-5">
                <p className="flex">
                  <FaTwitter className="mr-1" />
                  <a
                    href={username.twitter_username}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {username.twitter_username
                      ? username.twitter_username
                      : "This user has no twitter "}
                  </a>
                </p>
                <p className="flex">
                  <FaBuilding className="mr-1" />
                  <a href={username.company} target="_blank" rel="noreferrer">
                    {username.company
                      ? username.company
                      : "This user has no company "}
                  </a>
                </p>
              </div>
              {/* Main--Icons&Urls column two */}
            </div>
            {/* Main--Icons&Urls--Section--End */}
          </div>
          {/* Main--Heading-End */}
        </div>
      )}
      {/* Main--Section--End */}
    </div>
  );
}

export default User;
