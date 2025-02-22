import './Customers.css';

const Customers = () => {
    const logoData = [
        { id: 1, name: "Hanes", logo: "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png" },
        { id: 2, name: "H&R Block", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { id: 3, name: "Kimberly-Clark", logo: "https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112_1280.png" },
        { id: 4, name: "Accenture", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { id: 5, name: "Adobe", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { id: 6, name: "Comcast", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { id: 7, name: "Olix", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { id: 8, name: "Rabobank", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { id: 9, name: "Slalom", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { id: 10, name: "Ubisoft", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { id: 11, name: "Total", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
        { id: 12, name: "Ulta Beauty", logo: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png" },
    ];

    // Split logos into two rows
    const topRow = logoData.slice(0, Math.ceil(logoData.length / 2));
    const bottomRow = logoData.slice(Math.ceil(logoData.length / 2));

    return (
        <div className="customers-container bg-[#fcfcfc] py-20 px-8 md:px-24 text-center relative">
            <h1 className="text-4xl md:text-5xl text-gray-800 leading-tight mb-6">
                More than 90M users and 250,000 companies <br /> collaborate in the Innovation Workspace.
            </h1>

            {/* Logos Wrapper */}
            <div className="logos-wrapper relative">
                {/* Top Row - Moves Left */}
                <div className="top-row flex justify-center space-x-8">
                    {topRow.map((logo) => (
                        <div key={logo.id} className="logo-item">
                            <img
                                src={logo.logo}
                                alt={logo.name}
                                className="logo-img w-24 h-auto grayscale transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom Row - Moves Right */}
                <div className="bottom-row flex justify-center space-x-8 mt-8">
                    {bottomRow.map((logo) => (
                        <div key={logo.id} className="logo-item">
                            <img
                                src={logo.logo}
                                alt={logo.name}
                                className="logo-img w-24 h-auto grayscale transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Centered Title on Hover */}
                <div className="meet-our-customers absolute inset-0 flex justify-center items-center text-4xl font-bold text-gray-800 opacity-0 transition-all duration-300">
                    Meet Our Customers
                </div>
            </div>
        </div>
    );
};

export default Customers;
