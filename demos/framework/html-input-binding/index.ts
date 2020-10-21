/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Framework} from "../../../source/typescript/smart.elements"

window.onload = function() {
	const app = new smartApp(
		{
			data: {
				message: "Hello World",
				longMessage: "This is a long message" 
			}
		}
	)				
}