import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

function Button(props) {
    let { name, onClick, types } = props;

    const query = gql`
	{
		books{
			title
		}
	}
		

	`;
    const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;    
    console.log(data);
    return (
        <div onClick={onClick}>
    {name}{types.a}
    </div>
    );
}

export default Button;


Button.defaultProps = {
    onClick: function() {


    }
};