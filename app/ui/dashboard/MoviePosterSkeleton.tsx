'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image';
import {Card, Skeleton} from "@nextui-org/react";

export const MoviePosterSkeleton= () => {

    return(
        <div className="w-full overflow-y-auto overflow-x-hidden h-[calc(100vh-180px)] flex flex-col pt-32 gap-12">
            <div className='flex flex-row gap-12 flex-wrap justify-center items-end w-full' style={{height:'50%'}}>
               {[...Array(7)].map((_, index) => (                
                    <Card key={index} className="w-[220px]" radius="lg">
                        <Skeleton className="rounded-lg">
                            <div className="h-[330px] rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </Card>
                ))}
            </div>
        </div>
    )
}