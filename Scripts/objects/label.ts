﻿module objects {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    export class Label extends createjs.Text {
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        /*
            super CONSTRUCTOR modified
            string changed to number
        */
        constructor(labelString: number, labelFont: string, labelColour: string, x: number, y: number) {
            super(labelString, labelFont, labelColour);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;
        }
    }
} 