import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";



const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
});


// or you can use `import gql from 'graphql-tag';` instead



export const GraphQLReducer = {

    initialState: { rates: [] },

    /// !DON"T USE ARROW FUNCTIONS
    //Functions are called with "prevState" as "this"
    getRates(currency) {

        return client
            .query(
                {
                    query: gql`
                    {
                        rates(currency: "${currency}") {
                        currency
                        rate
                        }
                    }
            `
                })
            .then(({ data }) => {

                if (data && data.rates)
                    return {
                        ...this, rates: data.rates
                    }
                else return this;


            })
            .catch(error => {
                console.error("GraphQLReducer>getRates:" + error);
                return this;
            }
            );
    }




}
