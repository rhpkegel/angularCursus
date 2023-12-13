import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../chat.models";

@Pipe({
  name: 'formatUsername'
})
export class FormatUsernamePipe implements PipeTransform {

  transform(value: User): unknown {
    return formatUserName(value);
  }
}
export const formatUserName = (user: User): string => `${user.voornaam? user.voornaam+' ' : ''}${user.achternaam}`;
