export default function ContactMe({ isDarkMode }: { isDarkMode: boolean }) {

  const email = "gabrielgabriel1235@gmail.com";
  const phoneNumber = "+40 741 768 065";

  const copyToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className={`text-base font-medium ${isDarkMode ? 'dark:text-white text-white' : ''}`}>Email</span>
      </div>
      <div className={`my-6 overflow-auto rounded-xl border-2 p-2 ${isDarkMode ? 'border-gray-700 border-opacity-25 bg-black bg-opacity-25' : ''}`}>
        <pre className={`language-shell float-left min-w-full ${isDarkMode ? 'dark:text-white bg-black bg-opacity-75 text-white' : ''}`}
          onClick={() => copyToClipboard(email)} style={{ cursor: "pointer" }}>
          {email}
        </pre>
      </div>
      <div className="flex justify-between mb-1">
        <span className={`text-base font-medium ${isDarkMode ? 'dark:text-white text-white' : ''}`}>PhoneNumber</span>
      </div>
      <div className={`my-6 overflow-auto rounded-xl border-2 p-2 ${isDarkMode ? 'border-gray-700 border-opacity-25 bg-black bg-opacity-25' : ''}`}>
        <pre className={`language-shell float-left min-w-full ${isDarkMode ? 'dark:text-white bg-black bg-opacity-75 text-white' : ''}`}
          onClick={() => copyToClipboard(phoneNumber)} style={{ cursor: "pointer" }}>
          {phoneNumber}
        </pre>
      </div>
    </>
  );
}

