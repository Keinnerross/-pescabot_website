import Layout from "@/components/layout/layout";
import HomePage from "../pages/home/index"
import SubmitAlert from "@/components/alerts/submitAlert";
import { Suspense } from 'react';

export default function Home() {
  return (


  <Layout>

          <Suspense fallback={<div>Loading...</div>}>
      <SubmitAlert />
    </Suspense>

    <HomePage/>
  </Layout>
  

    
  );
}
