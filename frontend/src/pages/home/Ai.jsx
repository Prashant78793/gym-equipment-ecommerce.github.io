import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ai from '../../assets/ai.png';
import { useAuth } from '../../context/AuthContext'; // <-- Import useAuth

const Ai = () => {
  const navigate = useNavigate();
  const recognitionRef = useRef(null);
  const { currentUser, logout } = useAuth(); // <-- Get currentUser and logout

  // Speak function
  function speak(message) {
    let utterance = new window.SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }

  // Start recognition and handle result
  const handleClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.onresult = async (e) => { // <-- Make this async
        const transcript = e.results[0][0].transcript.trim().toLowerCase();

        let matched = false;
        const commands = [
          { keywords: ["home", "homepage"], path: "/", message: "Opening home page" },
          { keywords: ["cart", "my cart"], path: "/cart", message: "Opening cart page" },
          { keywords: ["login", "log in"], path: "/login", message: "Opening login page" },
          { keywords: ["register", "sign up"], path: "/register", message: "Opening register page" },
          { keywords: ["contact", "contact us"], path: "/contact", message: "Opening contact page" },
          { keywords: ["about", "about us"], path: "/about", message: "Opening about page" },
          { keywords: ["checkout", "check out"], path: "/checkout", message: "Opening checkout page" },
          { keywords: ["orders", "my orders"], path: "/orders", message: "Opening orders page" },
          { keywords: ["admin", "admin login", "adminlogin"], path: "/admin", message: "Opening Admin page" },
        ];

        for (const cmd of commands) {
          if (cmd.keywords.some(k => transcript.includes(k))) {
            speak(cmd.message);
            navigate(cmd.path);
            matched = true;
            break;
          }
        }

        // Logout command using Firebase Auth
        if (!matched && transcript.includes("logout")) {
          if (!currentUser) {
            speak("Please login first");
            navigate("/login");
          } else {
            await logout();
            speak("You have been logged out");
            navigate("/login");
          }
          matched = true;
        }

        if (!matched && transcript.includes("search")) {
          const searchTerm = transcript.replace("search", "").trim();
          if (searchTerm) {
            speak(`Searching for ${searchTerm}`);
            navigate(`/products?search=${searchTerm}`);
          } else {
            speak("Please specify a search term after saying search");
          }
        }
      };
    }
    recognitionRef.current.start();
  };

  return (
    <div className="fixed bottom-8 left-4 z-50">
      <div className="rounded-full bg-blue-100 p-2 shadow-lg">
        <img
          src={ai}
          alt="AI Chat Icon"
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-125"
          onClick={handleClick}
          title="Click to speak"
        />
      </div>
    </div>
  );
};

export default Ai;