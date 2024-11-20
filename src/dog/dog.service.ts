import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello():string{
        return "woof";
    }

   public introduce ():string{
    return "My name is rex";
   } 

   public modifyDetail ():string{
    return "Successfully Modified";
   } 
}


