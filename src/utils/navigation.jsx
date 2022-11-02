import { useParams } from "react-router-dom";
import React from "react";

export const WithRouter = (Component) => {
    const Wrapper = (props) => {
        const params = useParams()

        return <Component {...props} params = {params} />
    }
    return Wrapper
}