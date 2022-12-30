import React from "react";
import Moment from "react-moment";


// export a helper function to format the date
export const formatDate = (date) => {
    return <Moment fromNow>{date}</Moment>;
    };

