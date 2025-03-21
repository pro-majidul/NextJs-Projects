import MealSearchInput from './components/MealSearchInput';
import Image from 'next/image';


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
            <div className='flex items-center justify-center w-1/2 mx-auto'>

                <MealSearchInput></MealSearchInput>
            </div>

            <div className='grid grid-cols-4 gap-4 '>
                {
                    allmeals?.map(singlemeal => {
                        return (
                            <div className='border' key={singlemeal.idMeal}>
                                <p className='text-2xl'>{singlemeal.strCategory}</p>
                                <p className='text-xl'>{singlemeal.strCategory}</p>
                                <p className='text-lg'>{singlemeal.strInstructions}</p>

                                <Image
                                    src={singlemeal?.strMealThumb}
                                    width={500}
                                    height={500}
                                    alt="Meal Image"
                                    unoptimized={true}
                                />

                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
};

export default AllMealsData;