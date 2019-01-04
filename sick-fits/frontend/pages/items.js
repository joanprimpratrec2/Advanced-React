import React, { Component } from 'react';
import {Query} from 'react-apollo';
import gql from  'graphql-tag';
import styled from 'styled-components';

const ALL_ITEMS_QUERY=gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`; 

const StyCenter = styled.div`
    text-align: center;
`;

export default class items extends Component {
  render() {
    return (
      <StyCenter>
        <p>Items!</p>
        <Query query={ALL_ITEMS_QUERY}>            
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                console.log(data)
                return (                    
                    <p>inside return query there is {data.items.length} items </p>
                );
            }}
        </Query>
      </StyCenter>
    )
  }
}

