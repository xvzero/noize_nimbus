import React from 'react';

const ErrorPage = () => (
  <div className="error-page">
    <div className="inner-error-page">
      <h1 className="error-title">
        {"We can't find that user."}
      </h1>
      <div className="error-text">
        <p>{"A report has been sent to our tech team,"}</p>
        <p>{"and they're looking into the problem."}</p>
        <p>{'Please check back in a bit.'}</p>
      </div>
    </div>
  </div>
);

export default ErrorPage;
