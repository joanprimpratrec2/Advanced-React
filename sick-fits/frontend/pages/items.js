import React, { Component } from 'react';
import {Query} from 'react-apollo';
import gql from  'graphql-tag';
import styled from 'styled-components';
import Item from '../components/Item'

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

const StyItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export default class items extends Component {
  render() {
    return (
      <StyCenter>
        <Query query={ALL_ITEMS_QUERY}>            
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return  <StyItemsList> {data.items.map(item=> <Item item={item} key={item.id}></Item>)} </StyItemsList>              
                   
                
            }}
        </Query>
      </StyCenter>
    )
  }
}

