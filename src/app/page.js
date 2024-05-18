import GetData1 from "@/components/GetData1";
import Postdata1 from "@/components/Postdata1";

export const metadata = {
  title: "Next js Backend",
  description: "this is next js get and post application..."
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Postdata1 />
      <GetData1 />
    </main>
  );
}
