

const Collections = () => {

    const collections = [
        {
            "id": 1,
            "name": "Monitor & Led Tv",
            "recipe": "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
            "image": "https://i.ibb.co.com/Vm5KLkP/home-20-categories-1-3-170x-1.jpg",
            "category": "popular",
            "price": 14.7,
            "discountPrice": 13.2
        },
        {
            "id": 2,
            "name": "Mobile",
            "recipe": "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
            "image": "https://i.ibb.co.com/7y1dCb9/home-20-categories-1-1-170x-1.jpg",
            "category": "popular",
            "price": 14.7,
            "discountPrice": 13.2
        },
        {
            "id": 3,
            "name": "Computers",
            "recipe": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "image": "https://i.ibb.co.com/W2MZfLV/home-20-categories-1-4-170x.jpg",
            "category": "popular",
            "price": 14.5,
            "discountPrice": 13.0
        },
        {
            "id": 4,
            "name": "Laptops",
            "recipe": "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
            "image": "https://i.ibb.co.com/B2m739F/home-20-categories-1-2-170x-1.jpg",
            "category": "popular",
            "price": 12.5,
            "discountPrice": 11.0
        },
        {
            "id": 5,
            "name": "Smart Tv And LED TV",
            "recipe": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "image": "https://i.ibb.co.com/Vm5KLkP/home-20-categories-1-3-170x-1.jpg",
            "category": "popular",
            "price": 14.5,
            "discountPrice": 13.0
        },
        {
            "id": 6,
            "name": "Laptops",
            "recipe": "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
            "image": "https://i.ibb.co.com/B2m739F/home-20-categories-1-2-170x-1.jpg",
            "category": "popular",
            "price": 12.5,
            "discountPrice": 11.0
        },
        {
            "id": 7,
            "name": "Smart Phone",
            "recipe": "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
            "image": "https://i.ibb.co.com/7y1dCb9/home-20-categories-1-1-170x-1.jpg",
            "category": "popular",
            "price": 12.5,
            "discountPrice": 11.0
        },
        {
            "id": 8,
            "name": "Speeker",
            "recipe": "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing",
            "image": "https://i.ibb.co.com/R66V2Fn/home-20-categories-1-5-170x.jpg",
            "category": "popular",
            "price": 12.9,
            "discountPrice": 11.5
        },
        {
            "id": 9,
            "name": "Games & Sports",
            "recipe": "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing",
            "image": "https://i.ibb.co.com/GVd49sF/home-20-categories-1-6-170x.jpg",
            "category": "greencoffee",
            "price": 12.9,
            "discountPrice": 11.5
        },
    ];

    return (
        <section className="pt-40">
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold text-center mb-8">Collections</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map((collection) => (
                        <div key={collection.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={collection.image} alt={collection.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{collection.name}</h2>
                                <p className="text-gray-600 mb-4">{collection.recipe}</p>
                                <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;