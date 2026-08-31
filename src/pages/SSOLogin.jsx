import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { publicApi } from "../helpers/api";

export default function SSOLogin() {

  const navigate = useNavigate();

  const { ssoToken } = useParams();

  useEffect(() => {

    const login = async () => {


      try {
  const res = await publicApi.post(
    "/docs/exchange",
    { ssoToken }
  );

  console.log("SSO EXCHANGE SUCCESS:", res.data);

  sessionStorage.setItem(
    "token",
    res.data.token
  );

  const params = new URLSearchParams(
    window.location.search
  );

  const redirect = params.get("redirect");

  console.log("SSO REDIRECT:", redirect);
  console.log(
    "TOKEN SAVED:",
    !!sessionStorage.getItem("token")
  );

  window.location.href =
    redirect || "/public/overview";

} catch (err) {

  console.error("SSO EXCHANGE FAILED:", err);
  console.error("STATUS:", err.response?.status);
  console.error("DATA:", err.response?.data);

  alert(
    `SSO Exchange Failed\n\n` +
    `Status: ${err.response?.status || "Unknown"}\n` +
    `Message: ${
      err.response?.data?.message ||
      err.message ||
      "Unknown error"
    }`
  );

}
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
    };

    login();

  }, [navigate, ssoToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center"
      }}
    >
      Signing you in...
    </div>
  );
}