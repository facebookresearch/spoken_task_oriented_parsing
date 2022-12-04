/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Spoken Langauge Understanding Grand Challenge @ ICASSP 2023',
    description: (
      <>
        We are excited to announce the Spoken Language Understanding (SLU) Grand Challenge @ ICASSP 2023.
        Participants of this challenge will compete in spoken language understanding across 3 tracks (1) quality (2) on-device and (3)
        low-resource and domain adaptation. To get started please head over to <a href='docs/call_for_participation'>our page on ICASSP 2023 Grand Challenge!</a>
      </>
    ),
  },
  {
    title: 'Baselines and Experiments',
    description: (
      <>
        In order to get started with experimentation: all experiment code, baseline models, and pre-trained checkpoints are available in <a href='https://github.com/facebookresearch/fairseq/tree/main/examples/audio_nlp/nlu'>fairseq.</a>
      </>
    ),
  },
  {
    title: 'Dataset Paper',
    description: (
      <>
        To learn more details about SLU and Spoken Task Oriented Parsing (STOP)
        dataset. We encourage you to read our paper <a href='https://arxiv.org/abs/2207.10643?context=cs'>STOP: A dataset for Spoken Task Oriented Semantic Parsing</a>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/call_for_participation')}>
              Get Started on the Challenge
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
