import React from 'react';
import PropTypes from 'prop-types';

const Page= ( {title})=>
{
  return (<div>Page : {title} </div>)
}


Page.propsType={
title:PropTypes.string
};

Page.defaultProps={
  title:'Home'
}

export default Page