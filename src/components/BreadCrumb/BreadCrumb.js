import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../BreadCrumb/Bread.css';

const BreadCrumb = () => {
    return (
        <div className="breadcrumbs">
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    color="inherit"
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                        alert("Home Page Clicked");
                    }}
                >
                    Home Page
                </Link>
                <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={(event) => {
                        event.preventDefault();
                        alert("Dashboard Clicked");
                    }}
                >
                    Dashboard
                </Link>
                <Typography color="textPrimary">
                    Breadcrumb
                </Typography>
            </Breadcrumbs>
        </div>
    );
};

export default BreadCrumb;