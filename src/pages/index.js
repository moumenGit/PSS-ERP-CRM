import Layout from "@/layout";
import Homepage from "@/components/Homepage";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);
  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#0f3775" size={80} loading={loading}/>
        </div>
      ) : (
        <div className="flex">
          <Layout>
            <Homepage />
          </Layout>
        </div>
      )}
    </div>
  );
}
