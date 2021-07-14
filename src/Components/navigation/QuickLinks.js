import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function QuickLinks(props) {
  console.log('quick links', props);
  return (
    <div>
      <Link to="/">home</Link>
    </div>
  );
}

export default withRouter(QuickLinks);
