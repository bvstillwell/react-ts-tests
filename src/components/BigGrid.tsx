import * as React from 'react';
import { Row } from 'react-bootstrap/lib';

function BigGrid({ loading = false, data = null }: any) {
    if (loading) {
        return (<Row className="text-center"><h3>Loading...</h3></Row>)
    }

    if (data !== null) {
        return (<Row className="text-center">{data}</Row>)
    }

    // Waiting for first run
    return (<Row className="text-center"><h3>Enter some dates and click the button</h3></Row>)
}

export default BigGrid;