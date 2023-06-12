// default error page provided by chatgpt

import { NextPageContext } from 'next';
import { NextPage } from 'next';

type ErrorPageProps = {
  statusCode?: number;
};

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div>
      <h1>
        {statusCode ? `An error occurred: ${statusCode}` : 'An error occurred'}
      </h1>
      <p>Sorry, something went wrong.</p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
