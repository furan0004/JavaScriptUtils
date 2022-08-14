import{multiResult} from "../scripts/multiResult.js"
import{convertToNthDecimal} from "../scripts/functions.js"

export class colourConverter{
    static RGBtoColourCode(r, g, b, a = 255){
        return `#${multiResult(convertToNthDecimal, [[r, 16], [g, 16], [b, 16], [a, 16]]).join("")}`;
    }


    static RGBtoHSV(r, g, b, type = 0){
        // r, g, b are in [0, 1]
        //type is 0 or 1
    
        if(r * (r - 1) > 0 || g * (g - 1) > 0 || b * (b - 1) > 0 || type * (type - 1) != 0) return void 0;
    
        let min = Math.min(r, g, b);
        let max = Math.max(r, g, b);
    
        let colour = {
            hue: 0,
            saturation: (max - min) / max ** type,
            value: max,
        };
        
        switch(min){
            case r:
                colour.hue = 60 * ((b - g) / (max - min)) + 180;
                break;
            
            case g:
                colour.hue = 60 * ((r - b) / (max - min)) + 300;
                break;
    
            case b:
                colour.hue = 60 * ((g - r) / (max - min)) + 60;
                break;
        }
        colour.hue = (max == min) ? void 0 : ((colour.hue % 360) + 360) % 360;
    
        return colour;
    }

    static HSVtoRGB(hue, saturation, value, type = 0){
        //type is 0 or 1
    
        if(hue == void 0) hue = ((hue % 360) + 360) % 360;
        
        let C = value ** type * saturation;
        let _hue = hue / 60;
        let X = C * (1 - Math.abs(_hue % 2 - 1));
    
        let colour = {
            r: value - C,
            g: value - C,
            b: value - C,
        };
    
        if(hue != void 0) switch(Math.floor(_hue)){
            case 0:
                colour.r += C;
                colour.g += X;
                colour.b += 0;
                break;
    
            case 1:
                colour.r += C;
                colour.g += X;
                colour.b += 0;
                break;
    
            case 2:
                colour.r += 0;
                colour.g += C;
                colour.b += X;
                break;
    
            case 3:
                colour.r += 0;
                colour.g += X;
                colour.b += C;
                break;
    
            case 4:
                colour.r += X;
                colour.g += 0;
                colour.b += C;
                break;
    
            case 5:
                colour.r += C;
                colour.g += 0;
                colour.b += X;
                break;
        }
    
        return colour;
    }
}