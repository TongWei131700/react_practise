import ErrorBoundary from './ErrorBoundary';

function BadComponentContainer(){
    return (
        <>
        <ErrorBoundary>
            <BadComponent />
        </ErrorBoundary>
        <!--
            {`import ErrorBoundary from './ErrorBoundary';

function BadComponentContainer(){
    return (
        <ErrorBoundary>
            <BadComponent />
        </ErrorBoundary>
    )
}

function BadComponent(){
    return (
      {oops:"this is not good"}
    );
}

export default BadComponentContainer;
  `}
        -->
        </>
    )
}

function BadComponent(){
    return (
      {oops:"this is not good"}
    );
}

export default BadComponentContainer;
  