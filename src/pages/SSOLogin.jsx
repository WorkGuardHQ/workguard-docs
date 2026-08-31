// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { publicApi } from "../helpers/api";

// export default function SSOLogin() {

//   const navigate = useNavigate();

//   const { ssoToken } = useParams();

//   useEffect(() => {

//     const login = async () => {

//       try {

//         const res = await publicApi.post(
//           "/docs/exchange",
//           { ssoToken }
//         );

//         sessionStorage.setItem(
//           "token",
//           res.data.token
//         );

//         const params = new URLSearchParams(
//           window.location.search
//         );

//         const redirect =
//           params.get("redirect");

//         // navigate(
//         //   redirect ||
//         //   "/public/overview"
//         // );
// window.location.href =
//   redirect || "/public/overview";
//       } catch (err) {

//         navigate("/public/overview");

//       }
//     };

//     login();

//   }, [navigate, ssoToken]);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "grid",
//         placeItems: "center"
//       }}
//     >
//       Signing you in...
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { publicApi } from "../helpers/api";

export default function SSOLogin() {
  const navigate = useNavigate();
  const { ssoToken } = useParams();

  const [debug, setDebug] = useState("");

  useEffect(() => {
    const login = async () => {
      try {
        setDebug("1️⃣ SSO page loaded");

        const res = await publicApi.post(
          "/docs/exchange",
          { ssoToken }
        );

        setDebug(
          `2️⃣ Exchange OK\n` +
          `Token received: ${!!res.data.token}`
        );

        sessionStorage.setItem(
          "token",
          res.data.token
        );

        const savedToken =
          sessionStorage.getItem("token");

        const params = new URLSearchParams(
          window.location.search
        );

        const redirect =
          params.get("redirect");

        setDebug(
          `3️⃣ Token saved: ${!!savedToken}\n` +
          `4️⃣ Redirect: ${redirect}\n` +
          `5️⃣ Current URL: ${window.location.href}`
        );

        window.location.href =
          redirect || "/public/overview";

      } catch (err) {
        setDebug(
          `❌ SSO FAILED\n` +
          `Status: ${err.response?.status || "unknown"}\n` +
          `Message: ${err.response?.data?.message || err.message}`
        );

        // مؤقتًا مانعملش redirect عشان نشوف الخطأ
      }
    };

    login();
  }, [navigate, ssoToken]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "20px",
        background: "#f5f5f5",
      }}
    >
      <pre
        style={{
          width: "100%",
          maxWidth: "700px",
          padding: "20px",
          background: "#111",
          color: "#00ff88",
          borderRadius: "12px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontSize: "14px",
        }}
      >
        {debug || "Loading SSO..."}
      </pre>
    </div>
  );
}