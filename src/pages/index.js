import Layout from "@/layout";
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <div className="flex">
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}
