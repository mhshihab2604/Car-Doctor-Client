import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import errorImg from "../../assets/error.png"
const ErrorPage = () => {
    return (
        <div>
             <Helmet>
                <title>Error Page</title>
            </Helmet>
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <img src={errorImg} alt="" />
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link className="px-8 py-3 font-semibold rounded dark:bg-[#ff3811] dark:text-gray-50" t0="/">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;