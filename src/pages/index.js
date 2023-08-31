import * as React from "react";
import {useState} from "react";
import Layout from "@theme/Layout";
import { contentData } from "../data/content-data";
import {ButtonLink, TutorialsCard, FAQSection, EcosystemSection} from "../components";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <div className="bootstrap-wrapper">
        <div className="section-divider"></div>
        <div className="container">
          <div className="row">
            <div className="index-page exclude">
              <section className="section container-fluid">
                <div className="row justify-content-between">
                  <div className="col-lg-6 pop-text">
                  <h1 className="landing-page-h1"><a href="https://www.availproject.org/">Avail Project</a> Developer Documentation</h1>
                    <h2 className="mt-0" dangerouslySetInnerHTML={{__html: contentData.headText}}></h2>
                  </div>
                </div>
              </section>
            </div>
            <br/>
            <br/>
          </div>
          <div className="section-divider"></div>
          <div className="justify-content-center tutorial-cards">
            {
              contentData.linksCard.map((props, idx) => <TutorialsCard key={idx} {...props}/>)
            }
          </div>
        </div>
        <div className="section-divider"></div>
        <section className="section-ecosystem full-background">
          <div className="container">
            <EcosystemSection {...contentData.ecosystem}/>
          </div>
        </section>

        <div className="container">
          <div className="flex-row">
          </div>
          <div className="section-divider"></div>
          <div className="flex-row">
          </div>
          <div className="section-divider-40"></div>
          <section className="faq">
            <FAQSection {...contentData.faq}/>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Home;