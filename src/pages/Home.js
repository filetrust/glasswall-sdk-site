import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import {Container, Row} from 'react-bootstrap'


function HomePage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    
    <Layout
      title={`Glasswall`}
      description="The online knowledge base for the Glasswall SDK."
    >
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <Row>
          <Container>
            <div className={classnames('row', styles.responsiveCentered)}>
              <div className="col col--6 col--offset-3">
                <img className="homeImage" src="/static/img/use-cases-illustration-03.png"/>
                <h3 className="">Glasswall Documentation</h3>
                <p>A resource for Glasswall documentation</p>
              </div>
            </div> 
          </Container>
        </Row>
      </main>
    </Layout>
  );
}

export default HomePage;
