import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { log } from "../logger/logger";

const RedirectPage = () => {
  const { shortcode } = useParams();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRedirectUrl = async () => {
      try {
        await log("frontend", "info", "route", `Attempting redirect for shortcode: ${shortcode}`);

        const res = await fetch(`http://localhost:5000/api/resolve/${shortcode}`);
        const data = await res.json();

        if (!res.ok || !data.originalUrl) {
          await log("frontend", "error", "route", `Shortcode not found or invalid: ${shortcode}`);
          setError("Short URL not found or expired.");
          return;
        }

        await log("frontend", "info", "route", `Redirecting to: ${data.originalUrl}`);
        window.location.href = data.originalUrl;
      } catch (err) {
        await log("frontend", "fatal", "route", `Redirect failed: ${err.message}`);
        setError("Something went wrong during redirection.");
      }
    };

    fetchRedirectUrl();
  }, [shortcode]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#101723] text-white"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      {error ? (
        <div className="max-w-md text-center p-6 bg-[#223049] rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Oops!</h1>
          <p className="text-base mb-4">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-5 py-2 bg-[#2970f3] text-white rounded-lg font-semibold"
          >
            Go Back
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-medium">Redirecting...</h2>
        </div>
      )}
    </div>
  );
};

export default RedirectPage;
