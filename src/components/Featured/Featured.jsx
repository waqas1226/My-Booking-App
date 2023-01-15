import React from "react";
import './Featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { ArrowDownward, KeyboardArrowDown } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

const Featured = () => {

    return (
        <div className="featured">
            <div className="top df al">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={'70%'} />
                </div>
                <div className="title">Total sales today</div>
                <div className="amount">$420</div>
                <div className="desc">Previous transaction processing</div>
            </div>
            <div className="summary df al">
                <div className="item">
                    <div className="target">Target</div>
                    <div className="itemResult df">
                        <KeyboardArrowDown />
                        <div className="amount">$212</div>
                    </div>
                </div>
                <div className="item">
                    <div className="target">Target</div>
                    <div className="itemResult df">
                        <KeyboardArrowDown />
                        <div className="amount">$212</div>
                    </div>
                </div>
                <div className="item">
                    <div className="target">Target</div>
                    <div className="itemResult df">
                        <KeyboardArrowDown />
                        <div className="amount">$212</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Featured;