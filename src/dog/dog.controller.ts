import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import  {query, Request} from 'express'

@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) {}

    @Get()
    public getHello():string{
        return this.dogService.getHello();
    }
    @Get('greet/:id')
    public introduce(@Param("id") id:string, @Query("name") name:string): string{
        console.log("id:", id);
        console.log("query:",name);
        
        return this.dogService.introduce();
    }
}
