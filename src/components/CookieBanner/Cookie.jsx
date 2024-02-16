import React, { useEffect, useState } from "react";


export const Cookie = () => {
    const [showBanner, setShowBanner] = useState(true);
    
    useEffect(() => {
        const userChoice = localStorage.getItem("cookieAnswer");
        if (userChoice === "accepted" || userChoice === "denied") {
            setShowBanner(false);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieAnswer", "accepted");
        setShowBanner(false);
        alert("Cookies accepted!");
    };

    const denyCookies = () => {
        localStorage.setItem("cookieAnswer", "denied");
        setShowBanner(false);
        alert("Cookies denied!");
    };

    return (
        <div
        className="sticky bottom-5 ml-5"
        >
            {showBanner && (
                <div className="block max-w-40 ">
                    <form className=" bg-gray-400 p-3">
                        <h1 className="text-2xl">This site uses cookies</h1>
                        <button className="bg-green-700 p-1 gap-1 rounded hover:bg-sky-700 mr-2"type="button" onClick={acceptCookies}>Accept</button>
                        <button className="bg-slate-700 p-1 gap-1 rounded hover:bg-sky-700" type="button" onClick={denyCookies}>Decline</button>
                    </form>
                </div>
            )}
        </div>
    );
};
