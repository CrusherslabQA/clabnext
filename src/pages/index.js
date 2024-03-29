import React from 'react';
import SEO from 'components/seo';
// import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/service';
import VideoCalling from 'sections/video-calling';
import Pricing from 'sections/pricing';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Faq from 'sections/faq';
import Support from 'sections/support-team';
import Service from 'sections/service';

export default function IndexPage() {
  return (

   
     <>
        <SEO
          title="Software Testing Company | QA Services | TestingExperts"
          description="CrusherslabQA is a leading software testing company that provides QA services & software testing services. We are a team of QA experts who use the latest tools & techniques to ensure the best quality of your software."
        />
        <Banner />
        <Service />
        <VideoCalling />
        <Pricing />
        <Clients />
        {/* <Blog /> */}
        {/* <Faq /> */}
        <Support />
     </> 
     

  
  );
}
