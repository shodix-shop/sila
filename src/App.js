import { useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("No");
  const [clickCount, setClickCount] = useState(0);
  const [dog, setDog] = useState("");

  function click() {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;

      switch (newCount) {
        case 1:
          setMsg("Stupid girl, click the yes button...");
          break;
        case 2:
          setMsg("Wlkkkkkkkkkkkkkkk");
          break;
        case 3:
          setMsg("sila...");
          break;
        case 4:
          setMsg("Ya 7maraaaaaaaa...");
          break;
        case 5:
          setMsg("a9tlk ??? ...");
          break;
        case 6:
          setMsg("etgate 'yes' ya 7mara wlkkkkkkkkkkkkkk ...");
          break;
        case 7:
          setMsg("a...");
          break;
        default:
          document.cookie = "token=sila";
          setDog("Gassbbaannn 3nnkkkkkkkkkkkk...");
      }

      return newCount;
    });
  }

  function login() {
    document.cookie = "token=sila";
  }

  function Auth() {
    const hasToken = document.cookie.includes("token=sila");

    if (!hasToken) {
      return (
        <>
          <h1>
            <strong>If You Entered in, there is no way to exit</strong>
          </h1>
          <br />
          <h3 style={{ textAlign: "center" }}>Do you want to ? :</h3>
          <a href="/">
            <button
              onClick={login}
              type="button"
              className="inline-block rounded justify-center bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-xl focus:bg-blue-700 focus:shadow-xl focus:outline-none active:bg-blue-800 active:shadow-xl dark:bg-blue-800 dark:hover:bg-blue-600 dark:focus:bg-blue-600 dark:active:bg-blue-700"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Yes
            </button>
          </a>
          <button
            onClick={click}
            className="inline-block rounded justify-center bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-xl focus:bg-blue-700 focus:shadow-xl focus:outline-none active:bg-blue-800 active:shadow-xl dark:bg-blue-800 dark:hover:bg-blue-600 dark:focus:bg-blue-600 dark:active:bg-blue-700"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            {msg}
          </button>
        </>
      );
    } else {
      return (
        <>
          <h1>{dog}</h1>
          <br />
          <div className="cc">
            <section>
              <p>Lesson 1:</p>
              <br />
              <h3>
                LINUX SYSTEM AND FILES:{" "}
                <a
                  href="https://shodix-shop.github.io/les/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  LESSON
                </a>
              </h3>
            </section>
            <section>
              <p>Lesson 2:</p>
              <br />
              <h3>
                LOGIN SYSTEMS:{" "}
                <a
                  href="https://shodix-shop.github.io/les2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  LESSON
                </a>
              </h3>
            </section>
            <section>
              <p>Lesson 3:</p>
              <br />
              <h3>
                VULNERABILITIES AND HACK METHODS:{" "}
                <a
                  href="https://shodix-shop.github.io/les3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  LESSON
                </a>
              </h3>
            </section>
            <section>
              <p>Lesson 4:</p>
              <br />
              <h3>
                GIT AND GITHUB:{" "}
                <a
                  href="https://shodix-shop.github.io/les4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  LESSON
                </a>
              </h3>
            </section>
            <section>
              <p>Lesson 5:</p>
              <br />
              <h3>
                Tools:{" "}
                <a
                  href="https://shodix-shop.github.io/tools/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  Tools link here!
                </a>
              </h3>
            </section>
          </div>
        </>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Auth />
      </header>
    </div>
  );
}
