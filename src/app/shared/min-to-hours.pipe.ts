import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'minToHours'
})
export class MinToHoursPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        let hours: number = Math.floor(value/60);
        let min: number = value - hours * 60;
        return hours + 'h ' + min + ' m';
    }
}