import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../components/SEO';

export default function Slicemaster({ data }) {
  const { slicemaster } = data;

  return (
    <>
      <SEO
        title={`${slicemaster.name}`}
        image={slicemaster.image.asset.fluid.src}
      />
      <div className="center">
        <Img fluid={slicemaster.image.asset.fluid} />
        <h2>
          <span className="mark">{slicemaster.name}</span>
        </h2>
        <p>{slicemaster.description}</p>
      </div>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node
export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

Slicemaster.propTypes = {
  data: PropTypes.object,
};
