
/* IMPORT */

import * as React from 'react';
import {Subscribe} from 'unstated';

/* WITH CONTAINERS */

function withContainers ( ...Containers ) {

  return function wrapper ( WrappedComponent ) {

    return class ContainersProvider extends React.Component<any, any> {

      render () {

        return (
          <Subscribe to={[...Containers]}>
            {( ...containers ) => (
              <WrappedComponent containers={containers} container={containers[0]} {...this.props} />
            )}
          </Subscribe>
        );

      }

    } as any;

  };

}

/* EXPORT */

export default withContainers;
