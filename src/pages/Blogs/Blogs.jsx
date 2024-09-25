
const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: 'How to Choose the Perfect Product',
            image: 'https://picsum.photos/400?random=1',
            description: 'Learn how to select the best products for your needs, with tips and insights from our expert team.',
            date: 'September 24, 2024',
            link: '#',
        },
        {
            id: 2,
            title: 'Top Fashion Trends of 2024',
            image: 'https://picsum.photos/400?random=2',
            description: 'Discover the latest fashion trends that will define 2024, straight from the runways and style experts.',
            date: 'September 15, 2024',
            link: '#',
        },
        {
            id: 3,
            title: 'Sustainability in E-commerce',
            image: 'https://picsum.photos/400?random=3',
            description: 'Explore how e-commerce businesses are adopting sustainable practices to reduce environmental impact.',
            date: 'September 10, 2024',
            link: '#',
        },
        {
            id: 4,
            title: 'The Importance of Customer Experience',
            image: 'https://picsum.photos/400?random=4',
            description: 'Learn how customer experience impacts brand loyalty and growth in the e-commerce space.',
            date: 'August 28, 2024',
            link: '#',
        },
        {
            id: 5,
            title: 'Best Tools for Running an Online Store',
            image: 'https://picsum.photos/400?random=5',
            description: 'Check out the essential tools and platforms for managing and growing your e-commerce business.',
            date: 'August 15, 2024',
            link: '#',
        },
        {
            id: 6,
            title: 'How to Master Social Media Marketing',
            image: 'https://picsum.photos/400?random=6',
            description: 'Learn the strategies behind successful social media campaigns that drive traffic and conversions.',
            date: 'July 30, 2024',
            link: '#',
        },
        {
            id: 7,
            title: 'E-commerce Trends to Watch in 2024',
            image: 'https://picsum.photos/400?random=7',
            description: 'Stay ahead of the competition by learning about the emerging trends in the e-commerce industry.',
            date: 'July 18, 2024',
            link: '#',
        },
        {
            id: 8,
            title: 'The Power of Personalization in Online Shopping',
            image: 'https://picsum.photos/400?random=8',
            description: 'Discover how personalized shopping experiences can boost sales and customer satisfaction.',
            date: 'July 5, 2024',
            link: '#',
        },
        {
            id: 9,
            title: 'Effective Email Marketing Strategies',
            image: 'https://picsum.photos/400?random=9',
            description: 'Learn how to create compelling email campaigns that engage your audience and drive revenue.',
            date: 'June 22, 2024',
            link: '#',
        },
        {
            id: 10,
            title: 'How to Create a Seamless Checkout Experience',
            image: 'https://picsum.photos/400?random=10',
            description: 'Optimize your checkout process to reduce cart abandonment and increase conversions.',
            date: 'June 10, 2024',
            link: '#',
        },
        {
            id: 11,
            title: 'The Role of AI in E-commerce',
            image: 'https://picsum.photos/400?random=11',
            description: 'Explore how artificial intelligence is revolutionizing online shopping experiences and operations.',
            date: 'May 30, 2024',
            link: '#',
        },
        {
            id: 12,
            title: 'The Future of Payment Technologies',
            image: 'https://picsum.photos/400?random=12',
            description: 'Understand the evolving payment technologies that will shape the future of e-commerce.',
            date: 'May 15, 2024',
            link: '#',
        },
    ];


    return (
        <section className="bg-gray-100 pt-40 py-16">
            <div className="container mx-auto px-6 text-gray-800">
                {/* Page Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Our Blog</h2>
                    <p className="mt-4 text-lg">Stay updated with the latest news, trends, and tips from our experts.</p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                            <p className="text-gray-500 mb-2 text-sm">{blog.date}</p>
                            <p className="text-gray-600 mb-4">{blog.description}</p>
                            <a
                                href={blog.link}
                                className="text-indigo-500 hover:text-indigo-700 font-semibold"
                            >
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;