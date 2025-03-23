import MealSearchInput from './components/MealSearchInput';
import Image from 'next/image';
export const metadata = {
    title: "All Meals ",
    description: "Traying to learning nextJS as best as we can",
};

import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['400', '700', '800'],
    subsets: ["latin"],
})
const AllMealsData = async ({ searchParams }) => {

    const query = await searchParams;

    const fetchmealdata = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            return data.meals
        } catch (err) {
            console.log(err)
        }
    }

    const allmeals = await fetchmealdata()

    return (
        <section className='space-y-5'>
            <div className='flex items-center justify-center '>

                <MealSearchInput></MealSearchInput>
            </div>

            <div className='grid grid-cols-4 gap-4 '>
                {
                    allmeals?.map(singlemeal => {
                        return (
                            <div className='border' key={singlemeal.idMeal}>
                                <Image
                                    src={singlemeal?.strMealThumb}
                                    width={500}
                                    height={500}
                                    alt="Meal Image"
                                />
                                <p className={` text-3xl ${roboto.className}`}>{singlemeal.strCategory}</p>
                                <p className='text-xl'>{singlemeal.strCategory}</p>
                                <p className='text-lg'>{singlemeal.strInstructions}</p>



                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
};

export default AllMealsData;