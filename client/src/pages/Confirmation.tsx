import { useEffect, useState } from "react";
import "../styles/confirmation.css"

const Confirmation = () => {

  const [verified, setVerified] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!verified) {
      const verifySession = async () => {
        let sessionId;

        const dataFromLs = localStorage.getItem("sessionId");

        if (dataFromLs) {
          sessionId = JSON.parse(dataFromLs);
        }

        const response = await fetch(
            "http://localhost:3000/payments/verify-session",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ sessionId }),
            }
          );

          const data = await response.json();

        if (response.ok) {
          setVerified(data.verified);
          setIsLoading(false);
        }
      };
      verifySession();
    }
  }, [verified]);

    return (
        <div className="conf_div">
        <h2>{ verified && !isloading ? "Order confirmed!" : "Loading..."}</h2>
        </div>
    )
}

export default Confirmation