import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.redirect("/login");
    }

    const body = await request.json();
    const { title, description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        location,
         price } = body;

         Object.keys(body).forEach((value: any) => {
            if (!value) {
                return NextResponse.error();
            }
         });

         const listing = await prisma.listing.create({
                data: {
                    title,
                    description,
                    imageSrc,
                    category,
                    roomCount,
                    bathroomCount,
                    guestCount,
                    locationValue: location.value,
                    price: parseInt(price, 10),
                    userId: currentUser.id
                }
         });

         return NextResponse.json(listing);
}

export async function PATCH(request: Request) {
 
    const body = await request.json();
        const { 
      
            userId,

            roomCount,
         
            guestCount,
     
            bathroomCount,
 
            locationValue,
  
            startDate,
   
            endDate,
        
            category

        } = body;

        let query: any = {}

        if (userId) {
            query.userId = userId;
        }

        if (category) {
            query.category = category;
        }

        if (roomCount) {
            query.roomCount = {
                gte: +roomCount
            }
        }

        if (guestCount) {
            query.guestCount = {
                gte: +guestCount
            }
        }

        if (bathroomCount) {
            query.bathroomCount = {
                gte: +bathroomCount
            }
        }

        if (locationValue) {
            query.locationValue = locationValue;
        }

        if (startDate && endDate) {
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate },
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate}
                            }
                        ]
                    }
                }
            }
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            } 
        });

        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));

        return NextResponse.json({safeListings});
  
  
}