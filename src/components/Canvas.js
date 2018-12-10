import React from "react";
import {FormGroup, FormControl, ControlLabel, Radio, HelpBlock} from "react-bootstrap";

export default function Canvas({classname, id, list, context,  ...props}) {
    function draw(list, canv) {
        let ctx = canv.getContext("2d");
        let r = context.state.r;
        ctx.clearRect(0, 0, 400, 400);

        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 140, 0, Math.PI * 3 / 2, true);
        ctx.closePath();
        ctx.strokeStyle = "dodgerblue";
        ctx.fillStyle = "dodgerblue";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(200, 200, 140, 140);
        ctx.closePath();
        ctx.strokeStyle = "dodgerblue";
        ctx.fillStyle = "dodgerblue";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(130, 200);
        ctx.lineTo(200, 130);
        ctx.lineTo(200, 200);
        ctx.lineTo(130, 200);
        ctx.closePath();
        ctx.strokeStyle = "dodgerblue";
        ctx.fillStyle = "dodgerblue";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200, 380);
        ctx.lineTo(200, 20);
        ctx.lineTo(195, 25);
        ctx.lineTo(205, 25);
        ctx.lineTo(200, 20);
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(20, 200);
        ctx.lineTo(380, 200);
        ctx.lineTo(375, 195);
        ctx.lineTo(375, 205);
        ctx.lineTo(380, 200);
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(270, 195);
        ctx.lineTo(270, 205);
        ctx.moveTo(340, 195);
        ctx.lineTo(340, 205);

        ctx.moveTo(195, 130);
        ctx.lineTo(205, 130);
        ctx.moveTo(195, 60);
        ctx.lineTo(205, 60);

        ctx.moveTo(130, 195);
        ctx.lineTo(130, 205);
        ctx.moveTo(60, 195);
        ctx.lineTo(60, 205);

        ctx.moveTo(195, 270);
        ctx.lineTo(205, 270);
        ctx.moveTo(195, 340);
        ctx.lineTo(205, 340);

        ctx.font = "14px Times New Roman";

            ctx.fillText(r, 340, 215);
            ctx.fillText(r / 2, 270, 215);

            ctx.fillText(r, 215, 60);
            ctx.fillText(r / 2, 215, 130);

            ctx.fillText(-r, 60, 215);
            ctx.fillText(-(r / 2), 130, 215);

            ctx.fillText(-r, 215, 340);
            ctx.fillText(-(r / 2), 215, 275);


        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.stroke();

        ctx.font = "20px Times New Roman";
        ctx.fillText('Y', 210, 30);
        ctx.fillText('X', 370, 225);
    }


    return (
        <canvas id={id} className={classname} onLoad={draw(list)} width={400} height={400}/>
    );
}