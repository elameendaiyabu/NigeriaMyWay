/* eslint-disable react/prop-types */
import CarouselCard from "./CarouselCard.jsx"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.jsx"
import defaultImg from "../assets/defaultImage.jpeg"

export default function DiscoverRestaurant({ restaurants, isDiscoverRestaurant }) {


    function generateRandomItems(arr, count) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    return (
        <> {isDiscoverRestaurant ? <><div className=" pl-5 flex flex-col gap-5">
            <h1 className=' text-3xl text-black'>Discover Restaurants</h1>
            <Carousel>
                <CarouselContent className=' w-[300px]'>

                    {generateRandomItems(restaurants, 10).map((restaurant, index) => (
                        <CarouselItem key={index}>
                            <CarouselCard
                                title={restaurant.restaurant_name}
                                description={restaurant.restaurant_description || "No description available"}
                                image={restaurant.restaurant_image_url || defaultImg}
                                category={restaurant.restaurant_category || ' No category available'}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div></> : ""} </>

    )
}
